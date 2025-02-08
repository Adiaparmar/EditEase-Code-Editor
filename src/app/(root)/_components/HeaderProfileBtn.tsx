"use client";
import LoginButton from "@/components/LoginButton";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import React from "react";

function HeaderProfileBtn() {
  return (
    <div>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            href="/profile"
            labelIcon={<User className="size-4" />}
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        {/* <SignInButton /> */}
        <LoginButton />
      </SignedOut>
    </div>
  );
}

export default HeaderProfileBtn;
