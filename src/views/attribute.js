import React from "react";
import { EmbeddedContentAttribute } from "@aha-develop/aha-develop-react";

aha.on("adobeXdAttribute", ({ record, fields }, { identifier }) => {
  return (
    <EmbeddedContentAttribute
      identifier={identifier}
      record={record}
      fields={fields}
      product="Adobe XD"
      placeholder="https://xd.adobe.com/embed/..."
    />
  );
});