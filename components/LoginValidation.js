export default function validation(values) {
    let errors = {};
    const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;

    // Email
    if (values.email === "") {
        errors.email = "อีเมลไม่ควรที่จะเป็นช่องว่าง";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "อีเมลไม่ถูกต้อง";
    }

    // Password
    if (values.password === "") {
        errors.password = "รหัสไม่ควรที่จะเป็นช่องว่าง";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "รหัสผ่านไม่ถูกต้อง";
    }

    return errors;
}