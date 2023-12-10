export const requiredFieldValidator = (value) => {
  if (!value) return 'اینجا نباید خالی باشد';
  else return true;
};

export const checkFullnameRegex = (value) => {
  if (!/^[\u0600-\u06FF][^۰-۹][^a-zA-Z]{6,}$/.test(value))
     return 'نام و نام خانوادگی معتبر نیست';
  else return true;
};

export const uppercaseLetterValidator = (value) => {
  if (!/[A-Z]/.test(value)) return 'Must contain at least one uppercase letter';
  else return true;
};

export const lowercaseLetterValidator = (value) => {
  if (!/^[\u0600-\u06FF][^۰-۹][^a-zA-Z]{6,}$/.test(value)) return 'Must contain at least one lowercase letter';
  else return true;
};

export const numberValidator = (value) => {
  if (!/[0-9]/.test(value)) return 'Must contain at least one number';
  else return true;
};