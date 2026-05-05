/**
 * Casa Yolotl - Role Definitions and Assignment
 */

export type UserRole = 'CEO' | 'ADMIN' | 'OPERATOR' | 'USER';

export interface AuthUser {
    email: string;
    role: UserRole;
}

/**
 * Normalize an email address for consistent comparison.
 */
export function normalizeEmail(email?: string | null): string {
    return (email ?? "").trim().toLowerCase();
}

/**
 * Parse a comma-separated list of emails from environment variables.
 */
export function parseEmailList(value?: string): string[] {
    return (value ?? "")
        .split(",")
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean);
}

/**
 * Assigns a role to a user based on their email.
 */
export function getRoleByEmail(email?: string | null): UserRole {
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) return 'USER';

    const ceoEmails = parseEmailList(process.env.CEO_EMAILS);
    const adminEmails = parseEmailList(process.env.ADMIN_EMAILS);
    const operatorEmails = parseEmailList(process.env.OPERATOR_EMAILS);
    const legacyAdmins = parseEmailList(process.env.ALLOWED_ADMIN_EMAILS);

    if (ceoEmails.includes(normalizedEmail)) return 'CEO';
    if (adminEmails.includes(normalizedEmail)) return 'ADMIN';
    if (operatorEmails.includes(normalizedEmail)) return 'OPERATOR';

    // Backward compatibility for legacy ALLOWED_ADMIN_EMAILS
    if (legacyAdmins.includes(normalizedEmail)) return 'ADMIN';

    return 'USER';
}

export const ROLES: UserRole[] = ['CEO', 'ADMIN', 'OPERATOR', 'USER'];
