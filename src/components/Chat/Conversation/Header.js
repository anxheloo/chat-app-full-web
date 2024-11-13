import React, { memo, useCallback } from "react";
import ProfilePic from "../Profile/ProfilePic";
import { TopBarItems } from "../../../constants";
import { useDispatch } from "react-redux";
import { toggleMemberDetails } from "../../../store/MemberDetails/memberSlice";

const Header = memo(({ data }) => {
  const dispatch = useDispatch();

  const showUserDetails = useCallback(() => {
    dispatch(toggleMemberDetails());
    console.log("Profile picture clicked");
  }, [dispatch]);

  return (
    <div className="h-[70px] w-full flex bg-white dark:bg-bgDark2 px-4 border-b dark:border-textPrimary transition-colors 0.3s ease-in-out">
      <ProfilePic
        img={data?.img}
        handleClick={showUserDetails}
        online={data?.online}
      />
      <div className="flex-1 flex flex-col justify-between py-2 dark:text-white truncate pl-5">
        <h3 className="font-semibold">{data?.name}</h3>
        <p className="text-xs text-textPrimary">
          {data?.online === true ? "Online" : "Offline"}
        </p>
      </div>
      <div className="flex gap-4 items-center">
        {TopBarItems.map((item) => item.icon)}
      </div>
    </div>
  );
});

export default Header;
