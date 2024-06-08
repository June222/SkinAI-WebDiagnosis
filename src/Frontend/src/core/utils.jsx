export const passwordValidator = (password) => {
    if (!password || password.length <= 0) return 'Please enter a password.';
    else if (password.length < 8)
        return 'Password must be at least 8 characters long.';
    return '';
};

export const confirmPasswordValidator = (newPassword, confirmPassword) => {
    if (!confirmPassword || confirmPassword.length <= 0)
        return 'Please enter a confirm password.';
    if (newPassword !== confirmPassword) return 'Mismatched password.';
    return '';
};

export const validateIpv4 = (ip) => {
    const regex =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
};

export const validateCIDR = (cidr) => {
    const regex =
        /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\/([0-9]|[1-2][0-9]|3[0-2])$/;
    return regex.test(cidr);
}