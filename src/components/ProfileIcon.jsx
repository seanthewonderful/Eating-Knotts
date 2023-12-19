export default function ProfileIcon({
  avatar,
  selectedAvatar,
  setSelectedAvatar,
}) {
  return (
    <img
      id={
        selectedAvatar === avatar.imgSrc
          ? "selected-avatar"
          : "non-selected-avatar"
      }
      src={avatar.imgSrc}
      className="prof-icon-selection"
      onClick={() => setSelectedAvatar(avatar.imgSrc)}
    />
  );
}
