import { imgs } from "@/constant/index"
import useTitleHook from "@/hooks/TitleHook"
const ProfilePage = () => {
  useTitleHook("Profile");
  return (
    <div className="flex items-center justify-center">
      <img src={imgs.comingSoon} alt="" />
    </div>
  )
}

export default ProfilePage