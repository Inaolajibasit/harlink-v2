const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const source = fs.readFileSync(
  path.join(__dirname, "../lib/enquiry.ts"),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const sandbox = { exports: {} };
vm.runInNewContext(compiled, sandbox);
const { buildEnquiryPayload } = sandbox.exports;
const enquiry = {
  contactName: "  Ada   Obi Okafor  ",
  company: " Example Trading ",
  email: " ada@example.com ",
  phone: " 08000000000 ",
  service: "export-advisory",
  commodity: " Cocoa ",
  volume: " 20 tonnes ",
  destination: " Netherlands ",
  timing: " November ",
  message: " Please discuss preparation. ",
};

test("preserves legacy EmailJS fields and includes new context in the legacy message", () => {
  const payload = buildEnquiryPayload(enquiry, "Export advisory");
  assert.equal(payload.firstName, "Ada");
  assert.equal(payload.lastName, "Obi Okafor");
  assert.equal(payload.email, "ada@example.com");
  assert.equal(payload.phone, "08000000000");
  for (const detail of [
    "Example Trading",
    "Export advisory",
    "Cocoa",
    "20 tonnes",
    "Netherlands",
    "November",
    "Please discuss preparation.",
  ]) {
    assert.ok(payload.message.includes(detail), detail);
  }
});

test("supports single names and distinguishes omitted shipment details", () => {
  const payload = buildEnquiryPayload(
    {
      ...enquiry,
      contactName: "Ọlá",
      volume: " ",
      destination: "",
      timing: "",
    },
    "Export advisory",
  );
  assert.equal(payload.firstName, "Ọlá");
  assert.equal(payload.lastName, "");
  assert.equal((payload.message.match(/Not specified/g) || []).length, 3);
  assert.ok(!payload.message.includes("undefined"));
});
