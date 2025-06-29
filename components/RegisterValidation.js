export default function validation(values) {
    let errors = {};
    const name_pattern = /^[a-zA-Zก-ฮะ-์]+$/;
    const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;
    const tel_pattern = /^\d{10}$/;

    // First Name
    if (values.firstname === "") {
        errors.firstname = "ชื่อไม่ควรที่จะเป็นช่องว่าง";
    } else if (!name_pattern.test(values.firstname)) {
        errors.firstname = "ชื่อไม่ควรมีตัวเลขหรืออักษรพิเศษ";
    }

    // Last Name
    if (values.lastname === "") {
        errors.lastname = "นามสกุลไม่ควรที่จะเป็นช่องว่าง";
    } else if (!name_pattern.test(values.lastname)) {
        errors.lastname = "นามสกุลไม่ควรมีตัวเลขหรืออักษรพิเศษ";
    }

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

    // Tel
    if (values.tel === "") {
        errors.tel = "เบอร์โทรศัพท์ไม่ควรที่จะเป็นช่องว่าง";
    } else if (!tel_pattern.test(values.tel)) {
        errors.tel = "เบอร์โทรศัพท์ไม่ถูกต้อง";
    }

    return errors;
}