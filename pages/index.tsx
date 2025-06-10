import React from "react";

const MaskedDivGood = () => {
  return (
    <>
      <div className="head">
        <div className="avatar-wrapper" />
      </div>
      <style jsx>{`
        .head {
          position: relative;
        }

        .avatar-wrapper {
          width: 40px;
          height: 40px;
          background: #4285f4;
          border-radius: 50%;
          mask-image:
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><circle r="0.5" cx="0.5" cy="0.5"/></svg>'),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><circle r="0.6" cx="1.1" cy="0.5"/></svg>');
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-composite: source-out;
          mask-composite: subtract;
        }
      `}</style>
    </>
  );
};

const MaskedDivBad = () => {
  const CUTOUT_AVATAR_PERCENTAGE_VISIBLE = 0.5;
  const HEAD_MARGIN_PERCENTAGE = 0.1;

  return (
    <>
      <div className="head">
        <div className="avatar-wrapper" />
      </div>
      <style jsx>{`
        .head {
          position: relative;
        }

        .avatar-wrapper {
          width: 40px;
          height: 40px;
          background: #ff6b6b;
          border-radius: 50%;
          mask-image:
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><circle r="0.5" cx="0.5" cy="0.5"/></svg>'),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><circle r="${0.5 +
            HEAD_MARGIN_PERCENTAGE}" cx="${0.5 +
            CUTOUT_AVATAR_PERCENTAGE_VISIBLE +
            HEAD_MARGIN_PERCENTAGE}" cy="0.5"/></svg>');
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-composite: source-out;
          mask-composite: subtract;
        }
      `}</style>
    </>
  );
};

export default function MaskTest() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mask Test</h1>

      <div style={{ marginTop: "2rem" }}>
        <h2>Masked Div Test</h2>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div>
            <h3>Good (static values)</h3>
            <MaskedDivGood />
          </div>
          <div>
            <h3>Bad (inline expressions)</h3>
            <MaskedDivBad />
          </div>
        </div>
      </div>
    </div>
  );
}
