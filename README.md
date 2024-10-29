<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Login and Registration Form</title>
</head>
<body>
<h1>Login and Registration Form</h1>
<p>This project provides a login and registration form with simple validation for the following fields:</p>
<ul>
    <li>Username</li>
    <li>Email (with a specific domain constraint)</li>
    <li>Password (with length and character requirements)</li>
</ul>
<h2>Project Structure</h2>
<p><strong>HTML Elements:</strong> Login and Register forms are contained within elements referenced by <code>login</code> and <code>register</code>.</p>
<p><strong>JavaScript Functionality:</strong> Handles toggling between Login and Register pages and performs validation for each form.</p>

<h2>Code Overview</h2>

<h3>1. Page Toggle Functionality</h3>

<p>The <code>links</code> variable selects all <code>&lt;a&gt;</code> elements, which are used to switch between the Login and Register forms:</p>
<pre><code>let links = document.querySelectorAll('a');
let login = document.getElementById('login');
let register = document.getElementById('register');
</code></pre>

<p>Using an event listener, the display of either the login or register form is toggled based on which link is clicked:</p>
<pre><code>links.forEach(ele => ele.addEventListener('click', function() {
    if (this === links[0]) {
        login.style.display = 'none';
        register.style.display = 'flex';
    } else {
        register.style.display = 'none';
        login.style.display = 'flex';
    }
}));
</code></pre>

<h3>2. Validation Logic</h3>

<h4>Username Validation</h4>
<p>The username should:</p>
<ul>
    <li>Contain lowercase letters, numbers, and specific special characters.</li>
    <li>Display an error message if it doesn’t match these conditions.</li>
</ul>
<pre><code>let unvalid_username = function(input) {
    let rex = /^(?=.*\d)(?=.*[!@#$%^&*_])[a-z\d!@#$%^&*_]/;
    return rex.test(input);
};
</code></pre>

<h4>Email Validation</h4>
<p>The email should:</p>
<ul>
    <li>Be a valid Atlas email address (format: <code>[digits]@st.atlas.edu.tr</code>).</li>
    <li>Display an error message if it doesn’t match this format.</li>
</ul>
<pre><code>let atlas_mail_maching = function(input) {
    let rex = /[0-9]+@st.atlas.edu.tr/ig;
    return input.match(rex);
};
</code></pre>

<h4>Password Validation</h4>
<p>The password should:</p>
<ul>
    <li>Be at least 8 characters long.</li>
    <li>Contain uppercase and lowercase letters, numbers, and special characters.</li>
</ul>
<pre><code>let checkpassword = function(input) {
    let rex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}$/;
    return rex.test(input);
};
</code></pre>

<h3>3. Handling Form Submission</h3>

<p>Form submission is managed by checking each field. If any field is invalid, it prevents form submission and displays an error.</p>
<pre><code>document.forms[1][4].onclick = function(e) {
    let username = false, gmail = false, password = false;
    // Username validation
    try {
        if (document.forms[1][0].value === '') throw 'Please write a name';
        if (!unvalid_username(document.forms[1][0].value)) throw 'Only lowercase, numbers, and special characters allowed';
        username = true;
        err_name.textContent = "";
    } catch (ex) {
        err_name.textContent = ex;
        document.forms[1][0].after(err_name);
    }
    // Email validation
    try {
        if (document.forms[1][1].value === '') throw 'You should add your Atlas email';
        if (!atlas_mail_maching(document.forms[1][1].value)) throw 'Only Atlas emails are valid';
        gmail = true;
        err_mail.textContent = "";
    } catch (ex) {
        err_mail.textContent = ex;
        document.forms[1][1].after(err_mail);
    }
    // Password validation
    try {
        if (document.forms[1][2].value == '') throw 'Please write a password';
        if (document.forms[1][2].value.length > 8) {
            if (!checkpassword(document.forms[1][2].value)) throw 'Must include uppercase, lowercase, number, and special character';
        } else throw 'Password should be more than 8 characters';
        password = true;
        err_pass.textContent = '';
    } catch (ex) {
        err_pass.textContent = ex;
        document.forms[1][2].after(err_pass);
    }
    if (!username || !gmail || !password) {
        console.log("Invalid");
        e.preventDefault();
    }
};
</code></pre>

<h2>Usage</h2>

<ol>
    <li>Open the HTML file containing this code.</li>
    <li>Use the links to toggle between login and registration forms.</li>
    <li>Attempt to submit the form with various inputs to observe validation in action.</li>
</ol>

<h3>Dependencies</h3>
<p>No external libraries are required.</p>

</body>
</html>
