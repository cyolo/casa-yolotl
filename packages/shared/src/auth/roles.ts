/**
 * Casa Yolotl - Role Definitions and Assignment
 */

export type UserRole = 'CEO' | 'ADMIN' | 'OPERATOR' | 'USER';

export interface AuthUser {
    email: string;
    role: UserRole;
}

/**
 * Assigns a role to a user based on their email.
 * This logic can be expanded to use a database or complex config.
 */
export function getRoleByEmail(email?: string | null): UserRole {
    if (!email) return 'USER';

    // For high-priority access (CEO)
    const ceoEmails = (process.env.CEO_EMAILS || '').split(',').map(e => e.trim());
    if (ceoEmails.includes(email)) return 'CEO';

    // For standard admin access
    const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim());
    if (adminEmails.includes(email)) return 'ADMIN';

    // For portal operations
    const operatorEmails = (process.env.OPERATOR_EMAILS || '').split(',').map(e => e.trim());
    if (operatorEmails.includes(email)) return 'OPERATOR';

    // Fallback to the legacy ALLOWED_ADMIN_EMAILS for backward compatibility
    const legacyAdmins = (process.env.ALLOWED_ADMIN_EMAILS || '').split(',').map(e => e.trim());
    if (legacyAdmins.includes(email)) return 'ADMIN';

    return 'USER';
}

export const ROLES: UserRole[] = ['CEO', 'ADMIN', 'OPERATOR', 'USER'];
