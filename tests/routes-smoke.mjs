// Run against a local preview: node tests/routes-smoke.mjs
// Read-only requests only; never submits an enquiry.
import assert from "node:assert/strict";
const origin = "http://localhost:3000";
const slugs = [
  "export-agency-documentation",
  "customs-regulatory-coordination",
  "export-advisory",
  "trucking-haulage",
  "warehousing-coordination",
];
const routes = [
  "/",
  "/about",
  "/services",
  ...slugs.map((slug) => `/services/${slug}`),
  "/contact",
  "/privacy",
];
const documents = new Map();
const titles = new Set();
for (const route of routes) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: one H1`);
  assert.ok(html.includes('id="main-content"'), `${route}: skip target`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${route}: unique title`);
  titles.add(title);
  documents.set(route, html);
  console.log(`PASS ${route}`);
}
for (const [route, html] of documents) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^"\s]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const target = new URL(href, origin + route);
    if (target.pathname.startsWith("/_next/")) continue;
    const targetHtml = documents.get(target.pathname);
    assert.ok(targetHtml, `${route}: known internal route ${href}`);
    if (target.hash)
      assert.ok(
        targetHtml.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),
        `${route}: anchor ${href}`,
      );
  }
}
const redirects = {
  "/aboutus": "/about",
  "/pages/shipping": "/services",
  "/pages/custom-bonded-warehousing": "/services/warehousing-coordination",
  "/pages/ept": "/services/customs-regulatory-coordination#scope",
  "/pages/clearing-and-forwarding": "/services/customs-regulatory-coordination",
  "/pages/haulage": "/services/trucking-haulage",
  "/pages/import-and-export": "/services/export-agency-documentation",
};
for (const [route, destination] of Object.entries(redirects)) {
  const response = await fetch(origin + route, { redirect: "manual" });
  assert.equal(response.status, 308, route);
  assert.equal(
    new URL(response.headers.get("location"), origin).href,
    origin + destination,
    route,
  );
  console.log(`PASS redirect ${route}`);
}
for (const route of ["/services/unknown", "/pages/unknown", "/unknown"]) {
  assert.equal((await fetch(origin + route)).status, 404, route);
}
const contact = documents.get("/contact");
for (const phone of ["+2348033047379", "+2348167202457"])
  assert.ok(contact.includes(`href="tel:${phone}"`), phone);
const selected = await (
  await fetch(origin + "/contact?service=trucking-haulage")
).text();
assert.match(
  selected,
  /<option(?=[^>]*value="trucking-haulage")(?=[^>]*selected="")[^>]*>/,
);
const invalid = await (await fetch(origin + "/contact?service=unknown")).text();
assert.match(
  invalid,
  /<option(?=[^>]*value="not-sure")(?=[^>]*selected="")[^>]*>/,
);
console.log(
  "PASS internal links, anchors, 404s, contact phones and service preselection. No enquiries sent.",
);
