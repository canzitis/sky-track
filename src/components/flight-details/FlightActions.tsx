import { Route } from "../animate-ui/icons/route";
import { CheckLine } from "../animate-ui/icons/check-line";
import { ExternalLink } from "../animate-ui/icons/external-link";
import { Ellipsis } from "../animate-ui/icons/ellipsis";

interface Props {
  onRoute: () => void;
  onFollow: () => void;
  onShare: () => void;
  onMore: () => void;
}

export function FlightActions({ onRoute, onFollow, onShare, onMore }: Props) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-1">
        <button
          onClick={onRoute}
          className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element rounded-tl-2xl rounded-bl-2xl
					transition-colors hover:bg-accent px-3 py-2"
        >
          <Route animateOnHover />
          <span>Route</span>
        </button>

        <button
          onClick={onFollow}
          className="relative flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors  hover:bg-accent px-3 py-2"
        >
          <CheckLine animateOnHover />
          <span>Follow</span>
        </button>

        <button
          onClick={onShare}
          className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors  hover:bg-accent px-3 py-2"
        >
          <ExternalLink animateOnHover />
          <span>Share</span>
        </button>
        <button
          onClick={onMore}
          className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element rounded-tr-2xl rounded-br-2xl transition-colors  hover:bg-accent px-3 py-2"
        >
          <Ellipsis animateOnHover />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}
