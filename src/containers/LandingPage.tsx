import { BuilderComponent, builder} from '@builder.io/react';
import { useEffect, useState } from "react";
builder.init('b0cc6dd74943404fb548116997aebdb5');

function LandingPage() {
  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    builder
      .get("page", {
        userAttributes: {
          // To allow targeting different announcements at different pages (URLs)
          urlPath: window.location.pathname,
        },
      })
      .toPromise()
      .then((heroComp) => setLandingPage(heroComp));
  }, [window.location.pathname]);

  return (
    <>
      {landingPage && (
        <BuilderComponent model="page" content={landingPage} />
      )}
    </>
  );
}
export default LandingPage;