import RightCardContent from "./RightCardContent";

// RIGHTCARD COMPONENT: Individual user card with image and overlay content
// Receives: color, id, img, tag from RightContent via props
const RightCard = (props) => {
  // REMOVED: console.log(props.color) - Good practice: remove debug logs in production

  return (
    // Card container: shrink-0 = don't shrink when space is tight
    // w-80 = fixed width of 320px, relative = position context for absolute child
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      {/* Background image: object-cover = fills container without distortion */}
      <img className="h-full w-full object-cover" src={props.img} alt="" />

      {/* Overlay content on top of image */}
      {/* Passing props down to RightCardContent */}
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
