import { client } from "@/sanity/lib/client";
import Ping from "./ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

interface ViewProps {
  id: string;
}

const View = async ({ id }: ViewProps) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // TODO update number of views

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default View;
