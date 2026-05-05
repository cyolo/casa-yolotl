import { DefaultSession } from "next-auth";
import { UserRole } from "@casa-yolotl/shared/src/auth/roles";

declare module "next-auth" {
    interface Session {
        user: {
            role: UserRole;
        } & DefaultSession["user"];
    }

    interface User {
        role: UserRole;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: UserRole;
    }
}
