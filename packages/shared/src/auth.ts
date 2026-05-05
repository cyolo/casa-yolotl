import { getRoleByEmail, UserRole } from "./auth/roles";

export class SecurityValidator {
    /**
     * Check if a given email is in any allowed admin role (CEO, ADMIN, OPERATOR).
     */
    static isAdmin(email?: string | null): boolean {
        if (!email) return false;
        const role = this.getUserRole(email);
        return ["CEO", "ADMIN", "OPERATOR"].includes(role);
    }

    /**
     * Get the specific role for a user.
     */
    static getUserRole(email?: string | null): UserRole {
        return getRoleByEmail(email);
    }

    /**
     * Check if a role can manage inventory (read/write).
     * CEO has full access, ADMIN has read-only access in inventory views usually,
     * but specific actions are gated by canModifyInventory.
     */
    static canViewInventory(role: UserRole): boolean {
        return ["CEO", "ADMIN"].includes(role);
    }

    /**
     * Check if a role can modify inventory (price/stock).
     */
    static canModifyInventory(role: UserRole): boolean {
        return role === "CEO";
    }

    /**
     * Check if a role can access financial data.
     */
    static canAccessFinances(role: UserRole): boolean {
        return role === "CEO";
    }

    /**
     * Log a security-related event for auditing.
     */
    static logSecurityEvent(event: string, details: { email?: string | null; path?: string;[key: string]: any }) {
        const timestamp = new Date().toISOString();
        const severity = event.includes('DENIED') || event.includes('UNAUTHORIZED') || event.includes('REJECTION') ? 'WARNING' : 'INFO';

        console.log(`[SECURITY AUDIT][${timestamp}][${severity}] Event: ${event} | Details: ${JSON.stringify(details)}`);
    }
}
