import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params?.slug?.length === 2) {
    return (
      <div>
        Feature {params?.slug[0]} and concept {params?.slug[1]}
      </div>
    );
  } else if (params?.slug?.length === 1) {
    return <div>Feature {params?.slug[0]}</div>;
  }
  return <h1>Home docs</h1>;
};

export default Docs;
