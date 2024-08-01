/**
 * Converts a Mongoose lean document into a serializable plain JavaScript object.
 *
 * @param {Record<string, any> | null} leanDocument - The Mongoose lean document to be converted.
 * @returns {Record<string, any> | null} A plain JavaScript object that is a serializable representation of the input document.
 */

export function convertToSerializableObject(
  leanDocument: Record<string, any> | null,
): Record<string, any> | null {
  if (!leanDocument) return null;

  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key]?.toJSON && leanDocument[key]?.toString) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}
