import React from "react";

export default function PapuaNewGuineaMap() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        src="https://www.google.com/maps?q=Papua+New+Guinea&z=6&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Papua New Guinea Map"
      />
    </div>
  );
}
