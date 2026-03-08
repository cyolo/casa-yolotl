import { getRoleByEmail, UserRole } from "./auth/roles";

export class SecurityValidator {
    /**
     * Get the list of allowed admin emails from environment variables.
     */
    static getAllowedAdminEmails(): string[] {
        const envEmails = process.env.ALLOWED_ADMIN_EMAILS || "";
        const ceoEmails = process.env.CEO_EMAILS || "";
        const adminEmails = process.env.ADMIN_EMAILS || "";
        const operatorEmails = process.env.OPERATOR_EMAILS || "";

        const all = [envEmails, ceoEmails, adminEmails, operatorEmails].join(",");
        return all.split(",").map(email => email.trim()).filter(email => email.length > 0);
    }

    /**
     * Check if a given email is in the allowed admin list.
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
     * Log a security-related event for auditing.
     * @param event The type of security event (e.g., 'UNAUTHORIZED_ACCESS', 'ADMIN_LOGIN')
     * @param details Additional context for the audit log
     */
    static logSecurityEvent(event: string, details: { email?: string | null; path?: string;[key: string]: any }) {
        const timestamp = new Date().toISOString();
        const severity = event.includes('DENIED') || event.includes('UNAUTHORIZED') ? 'WARNING' : 'INFO';

        console.log(`[SECURITY AUDIT][${timestamp}][${severity}] Event: ${event} | Details: ${JSON.stringify(details)}`);
    }
}
