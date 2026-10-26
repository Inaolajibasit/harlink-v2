import { notFound, permanentRedirect } from "next/navigation";
import { legacyServiceRoutes } from "../../content/services";

export default async function LegacyServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = Object.hasOwn(legacyServiceRoutes, slug)
    ? legacyServiceRoutes[slug]
    : undefined;
  if (!destination) notFound();
  permanentRedirect(destination);
}
