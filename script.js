// -----------------------------
//   DOM Elements
// -----------------------------
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const langBtn = document.getElementById("langBtn");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// -----------------------------
//   Switch forms
// -----------------------------
function switchToSignup() {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
}
function switchToLogin() {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

// Attach listeners
showSignup.addEventListener("click", switchToSignup);
showLogin.addEventListener("click", switchToLogin);

// -----------------------------
//   Language Switch
// -----------------------------
let currentLang = "en";

langBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const isArabic = currentLang === "en";
  currentLang = isArabic ? "ar" : "en";

  html.lang = currentLang;
  html.dir = isArabic ? "rtl" : "ltr";
  langBtn.textContent = isArabic ? "English" : "العربية";

 // -----------------------------
 //   Login Form
// -----------------------------
  document.getElementById("loginTitle").textContent = isArabic
    ? "تسجيل الدخول"
    : "Sign In";
  document.getElementById("loginEmail").placeholder = isArabic
    ? "البريد الإلكتروني"
    : "Email";
  document.getElementById("loginPassword").placeholder = isArabic
    ? "كلمة المرور"
    : "Password";
  loginBtn.textContent = isArabic ? "تسجيل الدخول" : "Login";
  document.getElementById("noAccountSpan").textContent = isArabic
    ? "ليس لديك حساب؟"
    : "Don’t have an account?";
  showSignup.textContent = isArabic ? "إنشاء حساب" : "Sign Up";

 // -----------------------------
 //   Signup Form
// -----------------------------
  document.getElementById("signupTitle").textContent = isArabic
    ? "إنشاء حساب"
    : "Create Account";
  document.getElementById("signupName").placeholder = isArabic
    ? "الاسم الكامل"
    : "Full Name";
  document.getElementById("signupEmail").placeholder = isArabic
    ? "البريد الإلكتروني"
    : "Email";
  document.getElementById("signupPassword").placeholder = isArabic
    ? "كلمة المرور"
    : "Password";
  signupBtn.textContent = isArabic ? "إنشاء حساب" : "Sign Up";
  document.getElementById("hasAccountSpan").textContent = isArabic
    ? "لديك حساب بالفعل؟"
    : "Already have an account?";
  showLogin.textContent = isArabic ? "تسجيل الدخول" : "Login";
});
