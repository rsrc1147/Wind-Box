export const weatherTypes = [
    {
        name: "Clear night", icon: `<svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m63.728 79.39c-10.66 10.658-25.771 14.141-39.348 10.471 6.6211-1.7899 12.881-5.2741 18.081-10.471 15.857-15.86 15.856-41.572-0.002093-57.431-5.1981-5.1981-11.458-8.6802-18.079-10.47 13.579-3.6719 28.689-0.18973 39.35 10.471 15.858 15.858 15.858 41.57-0.001395 57.43zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        </svg>`
    },
    {
        name: "Sunny day", icon: `
        <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m50.603 65.517c-8.5868 0-15.574-6.9873-15.574-15.574 0-8.5868 6.9873-15.574 15.574-15.574 8.5882 0 15.574 6.9873 15.574 15.574 0 8.5875-6.9866 15.574-15.574 15.574zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m62.328 49.943c0 6.476-5.249 11.725-11.725 11.725-6.4753 0-11.724-5.249-11.724-11.725 0-6.4753 5.249-11.725 11.724-11.725 6.476 0 11.725 5.2497 11.725 11.725" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m50.603 17.812v6.4272" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m27.882 27.223 4.5417 4.5459" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m18.472 49.943h6.4265" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m27.882 72.663 4.5445-4.5445" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m50.603 82.075v-6.4293" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m73.321 72.663-4.5452-4.5445" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m82.732 49.944h-6.4265" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m73.321 27.223-4.5452 4.5459" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        </svg>`
    },
    {
        name: "Partly cloudy (night)", icon: `
        <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m82.48 61.642c-0.059989 0-0.11719 0.006976-0.17508 0.007673 0-0.00279 6.97e-4 -0.004883 6.97e-4 -0.007673 0-11.863-9.617-21.479-21.479-21.479-8.6628 0-16.109 5.1388-19.505 12.526-2.26-1.1921-4.8298-1.8743-7.5621-1.8743-7.0843 0-13.094 4.5459-15.313 10.874-0.30622-0.02581-0.61175-0.046038-0.92634-0.046038-5.9787 0-10.826 4.8458-10.826 10.826 0 5.9787 4.8472 10.827 10.826 10.827h64.96c5.9787 0 10.826-4.8472 10.826-10.827-6.98e-4 -5.9807-4.8472-10.827-10.827-10.827zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m71.5 43.019c1.4258 0.81892 2.7448 1.799 3.9411 2.9129 0.92983-0.5671 1.8108-1.2458 2.6158-2.0501 5.4708-5.4708 5.4708-14.341 0-19.811-3.6768-3.6768-8.8902-4.8779-13.574-3.6119 2.2838 0.61802 4.4427 1.8192 6.236 3.6119 5.1946 5.1932 5.4478 13.444 0.78125 18.948zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        </svg>
        `
    },
    {
        name: "Partly cloudy (day)", icon: `
        <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m81.185 58.871c-0.057198 0-0.1123 0.006976-0.16811 0.007673 0-0.00279 6.98e-4 -0.004883 6.98e-4 -0.007673 0-11.436-9.2711-20.706-20.706-20.706-8.351 0-15.528 4.954-18.803 12.075-2.1777-1.1489-4.6547-1.8073-7.2893-1.8073-6.829 0-12.623 4.382-14.763 10.482-0.29367-0.025112-0.59012-0.043946-0.89216-0.043946-5.7652 0-10.437 4.6722-10.437 10.437 0 5.7638 4.6722 10.437 10.437 10.437h62.619c5.7652 0 10.437-4.6729 10.437-10.437 6.98e-4 -5.7652-4.6715-10.437-10.435-10.437zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m80.545 48.589c1.2772-2.1589 1.845-4.7573 1.4321-7.4288-0.94727-6.1321-6.6881-10.336-12.819-9.389-3.4061 0.52595-6.2123 2.5328-7.876 5.2602" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m67.255 19.453 0.72405 4.6847" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m51.753 28.871 3.8218 2.8034" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m89.991 56.879-3.8239-2.8013" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m94.293 39.259-4.684 0.72266" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m84.875 23.755-2.8013 3.826" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>   
    `
    },
    { name: "Not used", icon: "" },
    {
        name: "Mist", icon:
            `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="m536.15 251.5c-0.33984 0-0.66797 0.042969-1.0039 0.050781v-0.050781c0-67.988-55.113-123.1-123.1-123.1-49.648 0-92.32 29.457-111.79 71.785-12.945-6.832-27.676-10.742-43.34-10.742-40.605 0-75.047 26.051-87.762 62.316-1.7539-0.14453-3.5156-0.26172-5.3086-0.26172-34.273 0-62.047 27.777-62.047 62.047 0 34.266 27.777 62.047 62.047 62.047h372.29c34.273 0 62.047-27.781 62.047-62.047 0.011719-34.27-27.773-62.047-62.039-62.047z"/>
    </svg>
    `
    },
    {
        name: "Fog", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <path d="m538.35 292.1c-0.33984 0-0.66797 0.042969-1.0039 0.050782v-0.050782c0-67.988-55.113-123.1-123.1-123.1 0.54688 0 1.0859 0.035156 1.6289 0.039063-10.773-23.559-34.469-39.969-62.066-39.969-11.496 0-22.305 2.8711-31.82 7.8867-14.293-31.078-45.617-52.707-82.066-52.707-49.914 0-90.379 40.465-90.379 90.379v0.039063c-0.24609-0.003906-0.48828-0.039063-0.73828-0.039063-25.16 0-45.555 20.395-45.555 45.555s20.395 45.555 45.555 45.555h37.207c-6.2344 7.9453-11.246 16.902-14.656 26.621-1.7539-0.14453-3.5156-0.26172-5.3086-0.26172-34.273 0-62.047 27.777-62.047 62.047 0 34.266 27.777 62.047 62.047 62.047h372.29c34.273 0 62.047-27.781 62.047-62.047 0.007813-34.27-27.773-62.047-62.039-62.047z"/>
    </svg>
        `
    },
    {
        name: "Cloudy", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m14.074 47.454h6.6441c3.0378-3.8749 7.7483-6.3742 13.055-6.3742 2.7958 0 5.4262 0.69824 7.7393 1.9182 3.4759-7.56 11.096-12.819 19.962-12.819 0.097657 0 0.19392 0.006278 0.29088 0.006975-1.9238-4.2069-6.1551-7.1373-11.083-7.1373-2.0529 0-3.983 0.5127-5.6822 1.4083-2.5523-5.5497-8.1459-9.412-14.655-9.412-8.9132 0-16.139 7.2259-16.139 16.139v0.006975c-0.043945-6.97e-4 -0.087193-0.006975-0.13184-0.006975-4.4929 0-8.1348 3.6419-8.1348 8.1348-6.98e-4 4.4929 3.6412 8.1348 8.1341 8.1348zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.634 52.161c-0.060687 0-0.11928 0.007673-0.17927 0.009068v-0.009068c0-12.141-9.8417-21.982-21.982-21.982-8.8658 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.251 0-13.401 4.6519-15.672 11.128-0.3132-0.025809-0.62779-0.046736-0.94796-0.046736-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.481c6.1203 0 11.08-4.9609 11.08-11.08 0.001395-6.1196-4.9595-11.08-11.078-11.08zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
   </svg>
    `
    },
    {
        name: "Overcast", icon: `
        <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="m169.6 184.11h128.4c0.46484 0 0.91797-0.0625 1.3477-0.16797 20.52-1.6367 36.434-18.766 36.434-39.445 0-20.059-14.992-36.691-34.363-39.266 0.23047-1.8047 0.33984-3.6133 0.33984-5.4141 0-24.16-19.652-43.812-43.809-43.812-16.07 0-30.742 8.9023-38.359 22.719-4.8398-2.4062-10.152-3.6562-15.656-3.6562-14.254 0-27.027 8.625-32.535 21.477-0.60938-0.027343-1.2031-0.042968-1.7969-0.042968-24.16 0-43.812 19.656-43.812 43.809-0.003906 24.145 19.652 43.801 43.812 43.801zm0-76.422c1.4297 0 2.957 0.125 4.8008 0.39062 2.7891 0.44922 5.4531-1.3203 6.2031-4.0547 2.8906-10.461 12.477-17.773 23.324-17.773 5.3477 0 10.434 1.7344 14.707 5.0117 1.418 1.0859 3.2656 1.4297 4.9844 0.93359 1.7148-0.50391 3.0859-1.7852 3.6953-3.4648 4.6641-12.887 16.973-21.539 30.637-21.539 17.98 0 32.609 14.629 32.609 32.613 0 3.0625-0.44922 6.1484-1.332 9.168-0.50781 1.7344-0.15234 3.6055 0.96484 5.0234 1.1133 1.418 2.8789 2.2578 4.6484 2.1445l1.3203-0.074219c15.668 0 28.422 12.746 28.422 28.414 0 15.074-11.805 27.523-26.875 28.332-0.24219 0.015625-0.47656 0.042968-0.70703 0.089844h-127.4c-17.98 0-32.613-14.629-32.613-32.609-0.007812-17.98 14.625-32.605 32.609-32.605z"/>
          <path d="m375.37 178c-28.508 0-51.703 23.195-51.703 51.699 0 28.504 23.195 51.699 51.703 51.699h154.91c0.5 0 0.98047-0.074219 1.4453-0.19531 24.191-1.8828 42.98-22.062 42.98-46.445 0-24.012-18.246-43.848-41.602-46.367 0.375-2.4961 0.56641-5.0195 0.56641-7.5391 0-28.508-23.195-51.699-51.699-51.699-19.348 0-36.977 10.93-45.793 27.805-5.9453-3.1641-12.531-4.8086-19.375-4.8086-17.008 0-32.211 10.461-38.5 25.957-1.0039-0.070312-1.9727-0.10547-2.9297-0.10547zm12.168 7.6367c3.6172-13.125 15.652-22.293 29.254-22.293 6.707 0 13.082 2.1797 18.445 6.2891 1.418 1.0859 3.2695 1.4297 4.9844 0.93359 1.7148-0.50391 3.0859-1.793 3.6953-3.4727 5.7852-15.992 21.078-26.738 38.047-26.738 22.332 0 40.5 18.168 40.5 40.5 0 3.8125-0.55859 7.6367-1.6523 11.387-0.50781 1.7344-0.15234 3.6055 0.96484 5.0234 1.1133 1.4219 2.793 2.25 4.6523 2.1445l1.6367-0.089844c19.543 0 35.441 15.898 35.441 35.438 0 18.805-14.723 34.328-33.516 35.336-0.27344 0.015625-0.54688 0.054687-0.81641 0.11328l-153.8-0.003906c-22.332 0-40.504-18.168-40.504-40.5s18.172-40.5 40.504-40.5c1.793 0 3.6797 0.15625 5.9453 0.49219 2.7852 0.37891 5.4688-1.3242 6.2227-4.0586z"/>
          <path d="m283.49 335.23c-8.5117-4.9844-18.082-7.582-28.055-7.582-23.426 0-44.312 14.758-52.383 36.434-1.9531-0.17188-3.7734-0.26172-5.5664-0.26172-38.652 0-70.094 31.445-70.094 70.094 0 38.652 31.449 70.09 70.098 70.09h216.7c0.55469 0 1.0938-0.089844 1.6016-0.24609 32.805-2.4258 58.312-29.746 58.312-62.766 0-33.254-25.891-60.57-58.566-62.867 0.76563-4.1602 1.1523-8.3594 1.1523-12.551 0-38.645-31.445-70.094-70.094-70.094-27 0.007813-51.543 15.715-63.109 39.75zm63.117-28.543c32.473 0 58.895 26.422 58.895 58.895 0 5.5312-0.8125 11.105-2.4062 16.559-0.50781 1.7422-0.14453 3.6172 0.97266 5.0391 1.1211 1.4219 2.8789 2.2109 4.6758 2.1289l1.0195-0.066407c0.44141-0.035156 0.88672-0.066406 1.3398-0.066406 28.57 0 51.812 23.238 51.812 51.816 0 27.492-21.52 50.188-49 51.66-0.33984 0.023437-0.67187 0.074218-0.99609 0.15234h-215.43c-32.473 0-58.895-26.422-58.895-58.895s26.422-58.895 58.895-58.895c2.5938 0 5.3438 0.22266 8.6562 0.71094 2.8008 0.44922 5.4609-1.3203 6.2109-4.0547 5.332-19.324 23.043-32.828 43.074-32.828 9.8789 0 19.27 3.2031 27.164 9.2578 1.4102 1.0859 3.2656 1.4336 4.9844 0.93359 1.7148-0.50391 3.0859-1.793 3.6953-3.4727 8.4219-23.25 30.652-38.875 55.332-38.875z"/>
        </svg>
    `
    },
    {
        name: "Light rain shower (night)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m82.48 49.913c-0.059989 0-0.11719 0.006975-0.17508 0.009068 0-0.004185 6.97e-4 -0.006278 6.97e-4 -0.009068 0-11.863-9.617-21.479-21.479-21.479-8.6628 0-16.109 5.1388-19.505 12.526-2.26-1.1921-4.8298-1.8743-7.5621-1.8743-7.0843 0-13.094 4.5459-15.313 10.874-0.30622-0.025111-0.61175-0.046038-0.92634-0.046038-5.9787 0-10.826 4.8472-10.826 10.826s4.8472 10.827 10.826 10.827h64.96c5.9787 0 10.826-4.8479 10.826-10.827 6.97e-4 -5.9787-4.8472-10.827-10.827-10.827zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m84.744 26.564c-3.7898 0.89076-7.583-0.399-10.065-3.0511 1.6978 0.50712 3.5463 0.59291 5.3941 0.15904 5.6403-1.326 9.1371-6.9741 7.8111-12.613-0.43527-1.8492-1.3365-3.464-2.5474-4.7586 3.4821 1.0407 6.3267 3.8602 7.2182 7.6507 1.326 5.6403-2.1708 11.287-7.8111 12.613zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m27 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m37 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m47 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m57 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m67 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m73 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m63 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m53 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m43 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m33 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>`
    },
    {
        name: "Light rain shower (day)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.241 32.161c-0.060686 0-0.11928 0.007673-0.17927 0.009068v-0.009068c0-12.141-9.8417-21.982-21.982-21.982-8.8658 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.251 0-13.401 4.6519-15.672 11.128-0.3132-0.025809-0.62779-0.046736-0.94796-0.046736-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.481c6.1203 0 11.08-4.9609 11.08-11.08 0.002093-6.1196-4.9595-11.08-11.078-11.08zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m77.533 65.488 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m77.533 79.061 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m57.533 65.488 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m57.533 79.061 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m37.533 65.488 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m37.533 79.061 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m17.533 65.488 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m17.533 79.061 4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>`
    },
    {
        name: "Drizzle", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m21.419 46.291c0-15.76 12.822-28.582 28.581-28.582s28.581 12.822 28.581 28.582" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m28.868 46.291c0-11.652 9.4789-21.132 21.132-21.132s21.132 9.4803 21.132 21.132" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m36.317 46.291c0-7.5572 6.1279-13.682 13.683-13.682 7.5593 0 13.684 6.1251 13.684 13.682" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m27 60v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m37 60v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m47 60v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m57 60v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m67 60v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m73 70v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m63 70v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m53 70v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m43 70v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m33 70v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m67 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m57 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m47 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m37 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m27 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>`
    },
    {
        name: "Light rain", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.241 32.161c-0.060686 0-0.11928 0.007673-0.17927 0.009068v-0.009068c0-12.141-9.8417-21.982-21.982-21.982-8.8658 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.251 0-13.401 4.6519-15.672 11.128-0.3132-0.025809-0.62779-0.046736-0.94796-0.046736-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.481c6.1203 0 11.08-4.9609 11.08-11.08 0.002093-6.1196-4.9595-11.08-11.078-11.08zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m22.467 65.488-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m22.467 79.061-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m42.467 65.488-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m42.467 79.061-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m62.467 65.488-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m62.467 79.061-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m82.467 65.488-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m82.467 79.061-4.9344 4.9337" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>
    `
    },
    {
        name: "Heavy rain shower (night)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m82.48 49.913c-0.059989 0-0.11719 0.006975-0.17508 0.009068 0-0.004185 6.97e-4 -0.006278 6.97e-4 -0.009068 0-11.863-9.617-21.479-21.479-21.479-8.6628 0-16.109 5.1388-19.505 12.526-2.26-1.1921-4.8298-1.8743-7.5621-1.8743-7.0843 0-13.094 4.5459-15.313 10.874-0.30622-0.025111-0.61175-0.046038-0.92634-0.046038-5.9787 0-10.826 4.8472-10.826 10.826s4.8472 10.827 10.826 10.827h64.96c5.9787 0 10.826-4.8479 10.826-10.827 6.97e-4 -5.9787-4.8472-10.827-10.827-10.827zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m84.744 26.564c-3.7898 0.89076-7.583-0.399-10.065-3.0511 1.6978 0.50712 3.5463 0.59291 5.3941 0.15904 5.6403-1.326 9.1371-6.9741 7.8111-12.613-0.43527-1.8492-1.3365-3.464-2.5474-4.7586 3.4821 1.0407 6.3267 3.8602 7.2182 7.6507 1.326 5.6403-2.1708 11.287-7.8111 12.613zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m27 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m37 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m47 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m57 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m67 80v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m73 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m63 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m53 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m43 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m33 90v2.2503" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
   </svg>   
    `
    },
    {
        name: "Heavy rain shower (day)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.241 32.161c-0.060686 0-0.11928 0.007673-0.17927 0.009068v-0.009068c0-12.141-9.8417-21.982-21.982-21.982-8.8658 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.251 0-13.401 4.6519-15.672 11.128-0.3132-0.025809-0.62779-0.046736-0.94796-0.046736-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.481c6.1203 0 11.08-4.9609 11.08-11.08 0.002093-6.1196-4.9595-11.08-11.078-11.08zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m10 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m20 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m30 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m40 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m50 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m60 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m70 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m80 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m90 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>
    `
    },
    {
        name: "Heavy rain", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.241 32.161c-0.060686 0-0.11928 0.007673-0.17927 0.009068v-0.009068c0-12.141-9.8417-21.982-21.982-21.982-8.8658 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.251 0-13.401 4.6519-15.672 11.128-0.3132-0.025809-0.62779-0.046736-0.94796-0.046736-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.481c6.1203 0 11.08-4.9609 11.08-11.08 0.002093-6.1196-4.9595-11.08-11.078-11.08zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m10 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m20 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m30 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m40 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m50 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m60 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m70 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m80 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m90 67.955v16.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>
    `
    },
    {
        name: "Sleet shower (night)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m545.79 200.18c-17.449-29.496-49.875-44.512-80.5-41.695-15.211-26.508-43.055-42.73-74.051-42.73-6.1602 0-12.016 0.82422-17.621 2.0547-11.73-12.336-27.352-20.07-44.441-21.848-6.9258-49.035-49.359-86.43-99.746-86.43-56.648 0-101.8 46.812-100.79 102.12-29.102 6.5117-50.156 32.254-50.156 62.906 0 35.555 28.926 64.48 64.48 64.48h43.66c-13.004 14.297-20.656 33.008-20.656 52.855 0 43.559 35.43 79 78.992 79h26.301c4.6914 0 8.4844-3.793 8.4844-8.4844 0-4.6914-3.7969-8.4844-8.4844-8.4844h-26.301c-34.195 0-62.02-27.824-62.02-62.027 0-22.332 12.156-42.996 31.695-53.926 12.445-6.9023 22.137-7.1055 25.133-7.7812 0.63672-0.84766 12.016-45.027 59.668-45.027 11.84 0 17.809 2.9141 23.68 4.3164 0.57812-0.84766 11.676-56.758 68.129-56.758 26.523 0 50.156 14.809 61.68 38.656 3.5977 7.4492 10.203 3.7695 19.176 3.7695 25.711 0 49.07 14.188 60.953 37.012 1.375 2.6445 4.043 4.375 7.0273 4.5508 36.152 2.1211 64.473 32.207 64.473 68.492 0 37.891-30.871 68.723-68.816 68.723l-88.418-0.003907c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.793 8.4844 8.4844 8.4844h88.41c47.305 0 85.785-38.438 85.785-85.695 0-43.664-32.895-80.129-75.727-85.02zm-318.43 14.934c-7.4922 1.668-16.969 5.918-18.977 6.9609h-65.414c-26.199 0-47.512-21.312-47.512-47.512 0-24.625 18.438-44.961 42.887-47.305l8.668-0.82812c-0.87109-8.4297-1.4102-8.8164-1.4102-16.184 0-46.18 37.602-83.746 83.828-83.746 44.023 0 80.738 34.305 83.59 78.105l0.77734 7.9297c3.9297 0.49609 22.812-2.9414 41.305 11.285-19.801 9.2617-35.414 26.441-43.16 45.359-35.086-5.707-70.262 13.223-84.582 45.934z"/>
    <path d="m385.55 400.66c3.3125 3.3164 8.6836 3.3164 11.996 0 3.3164-3.3125 3.3164-8.6836 0-11.996l-17.766-17.766h25.121c4.6914 0 8.4844-3.793 8.4844-8.4844 0-4.6914-3.793-8.4844-8.4844-8.4844h-25.121l17.766-17.766c3.3164-3.3125 3.3164-8.6836 0-12-3.3125-3.3125-8.6836-3.3125-11.996 0l-17.766 17.766v-25.125c0-4.6914-3.793-8.4844-8.4844-8.4844-4.6914 0-8.4844 3.7969-8.4844 8.4844v25.125l-17.766-17.766c-3.3125-3.3125-8.6836-3.3125-12 0-3.3125 3.3125-3.3125 8.6836 0 12l17.766 17.766h-25.125c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.7969 8.4844 8.4844 8.4844h25.125l-17.766 17.766c-3.3125 3.3125-3.3125 8.6836 0 11.996 3.3125 3.3164 8.6836 3.3164 12 0l17.766-17.766v25.121c0 4.6914 3.7969 8.4844 8.4844 8.4844 4.6914 0 8.4844-3.793 8.4844-8.4844v-25.121z"/>
    <path d="m538.88 487.89h-25.125l17.766-17.766c3.3125-3.3125 3.3125-8.6836 0-11.996s-8.6836-3.3125-12 0l-17.766 17.762v-25.121c0-4.6914-3.7969-8.4844-8.4844-8.4844-4.6914 0-8.4844 3.7969-8.4844 8.4844v25.125l-17.766-17.766c-3.3125-3.3125-8.6836-3.3125-11.996 0s-3.3125 8.6836 0 11.996l17.762 17.766h-25.121c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.7969 8.4844 8.4844 8.4844h25.117l-17.758 17.758c-3.3125 3.3125-3.3125 8.6836 0 11.996s8.6836 3.3164 11.996 0l17.766-17.762v25.129c0 4.6914 3.7969 8.4844 8.4844 8.4844 4.6914 0 8.4844-3.7969 8.4844-8.4844v-25.117l17.758 17.758c3.3125 3.3125 8.6836 3.3125 11.996 0 3.3164-3.3125 3.3164-8.6836 0-12l-17.762-17.766h25.129c4.6914 0 8.4844-3.7969 8.4844-8.4844 0.003906-4.6836-3.7891-8.4805-8.4805-8.4805z"/>
    <path d="m455.06 381.94c-4.0781-2.3281-9.2539-0.85547-11.551 3.2305l-30.66 54.449c-2.3047 4.0781-0.85547 9.2578 3.2305 11.551 3.9805 2.2695 9.2109 0.92188 11.551-3.2305l30.656-54.449c2.3086-4.0781 0.85938-9.2539-3.2266-11.551z"/>
    <path d="m493 420.27 15.328-27.219c2.3047-4.0781 0.85547-9.2539-3.2305-11.551-4.0742-2.3203-9.2539-0.85547-11.551 3.2305l-15.328 27.219c-2.3047 4.0781-0.85547 9.2539 3.2305 11.551 3.9805 2.2695 9.2109 0.92188 11.551-3.2305z"/>
    <path d="m362.8 456.4c-4.2773-1.9375-9.2969-0.03125-11.227 4.2344l-31.281 69.105c-1.9297 4.2695-0.03125 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l31.281-69.105c1.9336-4.2695 0.035156-9.2969-4.2344-11.227z"/>
    <path d="m417.01 473.07c-4.2852-1.9297-9.2969-0.03125-11.227 4.2344l-20.012 44.207c-1.9297 4.2656-0.03125 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l20.012-44.207c1.9336-4.2656 0.035156-9.293-4.2344-11.227z"/>
    <path d="m276.02 456.4c-4.2656-1.9375-9.2969-0.03125-11.227 4.2344l-25.289 55.863c-1.9297 4.2656-0.042969 9.2969 4.2344 11.227 4.2383 1.918 9.2891 0.054688 11.227-4.2344l25.289-55.863c1.9297-4.2695 0.039062-9.2969-4.2344-11.227z"/>
    <path d="m329.84 417.21c-4.2852-1.9375-9.2969-0.03125-11.227 4.2344l-25.289 55.863c-1.9297 4.2695-0.042969 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l25.289-55.863c1.9297-4.2656 0.042969-9.2969-4.2344-11.227z"/>
    <path d="m244.73 394.84c-4.2109-2.0312-9.2891-0.25-11.328 3.9688l-39.73 82.578c-2.0312 4.2266-0.25781 9.2969 3.9688 11.328 4.1641 2.0078 9.2656 0.29297 11.328-3.9688l39.73-82.578c2.0312-4.2266 0.25781-9.2969-3.9688-11.328z"/>
    </svg>
    `
    },
    {
        name: "Sleet shower (day)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m545.79 200.18c-17.449-29.496-49.875-44.512-80.5-41.695-15.211-26.508-43.055-42.73-74.051-42.73-6.1602 0-12.016 0.82422-17.621 2.0547-11.73-12.336-27.352-20.07-44.441-21.848-6.9258-49.035-49.359-86.43-99.746-86.43-56.648 0-101.8 46.812-100.79 102.12-29.102 6.5117-50.156 32.254-50.156 62.906 0 35.555 28.926 64.48 64.48 64.48h43.66c-13.004 14.297-20.656 33.008-20.656 52.855 0 43.559 35.43 79 78.992 79h26.301c4.6914 0 8.4844-3.793 8.4844-8.4844 0-4.6914-3.7969-8.4844-8.4844-8.4844h-26.301c-34.195 0-62.02-27.824-62.02-62.027 0-22.332 12.156-42.996 31.695-53.926 12.445-6.9023 22.137-7.1055 25.133-7.7812 0.63672-0.84766 12.016-45.027 59.668-45.027 11.84 0 17.809 2.9141 23.68 4.3164 0.57812-0.84766 11.676-56.758 68.129-56.758 26.523 0 50.156 14.809 61.68 38.656 3.5977 7.4492 10.203 3.7695 19.176 3.7695 25.711 0 49.07 14.188 60.953 37.012 1.375 2.6445 4.043 4.375 7.0273 4.5508 36.152 2.1211 64.473 32.207 64.473 68.492 0 37.891-30.871 68.723-68.816 68.723l-88.418-0.003907c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.793 8.4844 8.4844 8.4844h88.41c47.305 0 85.785-38.438 85.785-85.695 0-43.664-32.895-80.129-75.727-85.02zm-318.43 14.934c-7.4922 1.668-16.969 5.918-18.977 6.9609h-65.414c-26.199 0-47.512-21.312-47.512-47.512 0-24.625 18.438-44.961 42.887-47.305l8.668-0.82812c-0.87109-8.4297-1.4102-8.8164-1.4102-16.184 0-46.18 37.602-83.746 83.828-83.746 44.023 0 80.738 34.305 83.59 78.105l0.77734 7.9297c3.9297 0.49609 22.812-2.9414 41.305 11.285-19.801 9.2617-35.414 26.441-43.16 45.359-35.086-5.707-70.262 13.223-84.582 45.934z"/>
    <path d="m385.55 400.66c3.3125 3.3164 8.6836 3.3164 11.996 0 3.3164-3.3125 3.3164-8.6836 0-11.996l-17.766-17.766h25.121c4.6914 0 8.4844-3.793 8.4844-8.4844 0-4.6914-3.793-8.4844-8.4844-8.4844h-25.121l17.766-17.766c3.3164-3.3125 3.3164-8.6836 0-12-3.3125-3.3125-8.6836-3.3125-11.996 0l-17.766 17.766v-25.125c0-4.6914-3.793-8.4844-8.4844-8.4844-4.6914 0-8.4844 3.7969-8.4844 8.4844v25.125l-17.766-17.766c-3.3125-3.3125-8.6836-3.3125-12 0-3.3125 3.3125-3.3125 8.6836 0 12l17.766 17.766h-25.125c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.7969 8.4844 8.4844 8.4844h25.125l-17.766 17.766c-3.3125 3.3125-3.3125 8.6836 0 11.996 3.3125 3.3164 8.6836 3.3164 12 0l17.766-17.766v25.121c0 4.6914 3.7969 8.4844 8.4844 8.4844 4.6914 0 8.4844-3.793 8.4844-8.4844v-25.121z"/>
    <path d="m538.88 487.89h-25.125l17.766-17.766c3.3125-3.3125 3.3125-8.6836 0-11.996s-8.6836-3.3125-12 0l-17.766 17.762v-25.121c0-4.6914-3.7969-8.4844-8.4844-8.4844-4.6914 0-8.4844 3.7969-8.4844 8.4844v25.125l-17.766-17.766c-3.3125-3.3125-8.6836-3.3125-11.996 0s-3.3125 8.6836 0 11.996l17.762 17.766h-25.121c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.7969 8.4844 8.4844 8.4844h25.117l-17.758 17.758c-3.3125 3.3125-3.3125 8.6836 0 11.996s8.6836 3.3164 11.996 0l17.766-17.762v25.129c0 4.6914 3.7969 8.4844 8.4844 8.4844 4.6914 0 8.4844-3.7969 8.4844-8.4844v-25.117l17.758 17.758c3.3125 3.3125 8.6836 3.3125 11.996 0 3.3164-3.3125 3.3164-8.6836 0-12l-17.762-17.766h25.129c4.6914 0 8.4844-3.7969 8.4844-8.4844 0.003906-4.6836-3.7891-8.4805-8.4805-8.4805z"/>
    <path d="m455.06 381.94c-4.0781-2.3281-9.2539-0.85547-11.551 3.2305l-30.66 54.449c-2.3047 4.0781-0.85547 9.2578 3.2305 11.551 3.9805 2.2695 9.2109 0.92188 11.551-3.2305l30.656-54.449c2.3086-4.0781 0.85938-9.2539-3.2266-11.551z"/>
    <path d="m493 420.27 15.328-27.219c2.3047-4.0781 0.85547-9.2539-3.2305-11.551-4.0742-2.3203-9.2539-0.85547-11.551 3.2305l-15.328 27.219c-2.3047 4.0781-0.85547 9.2539 3.2305 11.551 3.9805 2.2695 9.2109 0.92188 11.551-3.2305z"/>
    <path d="m362.8 456.4c-4.2773-1.9375-9.2969-0.03125-11.227 4.2344l-31.281 69.105c-1.9297 4.2695-0.03125 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l31.281-69.105c1.9336-4.2695 0.035156-9.2969-4.2344-11.227z"/>
    <path d="m417.01 473.07c-4.2852-1.9297-9.2969-0.03125-11.227 4.2344l-20.012 44.207c-1.9297 4.2656-0.03125 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l20.012-44.207c1.9336-4.2656 0.035156-9.293-4.2344-11.227z"/>
    <path d="m276.02 456.4c-4.2656-1.9375-9.2969-0.03125-11.227 4.2344l-25.289 55.863c-1.9297 4.2656-0.042969 9.2969 4.2344 11.227 4.2383 1.918 9.2891 0.054688 11.227-4.2344l25.289-55.863c1.9297-4.2695 0.039062-9.2969-4.2344-11.227z"/>
    <path d="m329.84 417.21c-4.2852-1.9375-9.2969-0.03125-11.227 4.2344l-25.289 55.863c-1.9297 4.2695-0.042969 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l25.289-55.863c1.9297-4.2656 0.042969-9.2969-4.2344-11.227z"/>
    <path d="m244.73 394.84c-4.2109-2.0312-9.2891-0.25-11.328 3.9688l-39.73 82.578c-2.0312 4.2266-0.25781 9.2969 3.9688 11.328 4.1641 2.0078 9.2656 0.29297 11.328-3.9688l39.73-82.578c2.0312-4.2266 0.25781-9.2969-3.9688-11.328z"/>
    </svg>
    `
    },
    {
        name: "Sleet", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m545.79 200.18c-17.449-29.496-49.875-44.512-80.5-41.695-15.211-26.508-43.055-42.73-74.051-42.73-6.1602 0-12.016 0.82422-17.621 2.0547-11.73-12.336-27.352-20.07-44.441-21.848-6.9258-49.035-49.359-86.43-99.746-86.43-56.648 0-101.8 46.812-100.79 102.12-29.102 6.5117-50.156 32.254-50.156 62.906 0 35.555 28.926 64.48 64.48 64.48h43.66c-13.004 14.297-20.656 33.008-20.656 52.855 0 43.559 35.43 79 78.992 79h26.301c4.6914 0 8.4844-3.793 8.4844-8.4844 0-4.6914-3.7969-8.4844-8.4844-8.4844h-26.301c-34.195 0-62.02-27.824-62.02-62.027 0-22.332 12.156-42.996 31.695-53.926 12.445-6.9023 22.137-7.1055 25.133-7.7812 0.63672-0.84766 12.016-45.027 59.668-45.027 11.84 0 17.809 2.9141 23.68 4.3164 0.57812-0.84766 11.676-56.758 68.129-56.758 26.523 0 50.156 14.809 61.68 38.656 3.5977 7.4492 10.203 3.7695 19.176 3.7695 25.711 0 49.07 14.188 60.953 37.012 1.375 2.6445 4.043 4.375 7.0273 4.5508 36.152 2.1211 64.473 32.207 64.473 68.492 0 37.891-30.871 68.723-68.816 68.723l-88.418-0.003907c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.793 8.4844 8.4844 8.4844h88.41c47.305 0 85.785-38.438 85.785-85.695 0-43.664-32.895-80.129-75.727-85.02zm-318.43 14.934c-7.4922 1.668-16.969 5.918-18.977 6.9609h-65.414c-26.199 0-47.512-21.312-47.512-47.512 0-24.625 18.438-44.961 42.887-47.305l8.668-0.82812c-0.87109-8.4297-1.4102-8.8164-1.4102-16.184 0-46.18 37.602-83.746 83.828-83.746 44.023 0 80.738 34.305 83.59 78.105l0.77734 7.9297c3.9297 0.49609 22.812-2.9414 41.305 11.285-19.801 9.2617-35.414 26.441-43.16 45.359-35.086-5.707-70.262 13.223-84.582 45.934z"/>
    <path d="m385.55 400.66c3.3125 3.3164 8.6836 3.3164 11.996 0 3.3164-3.3125 3.3164-8.6836 0-11.996l-17.766-17.766h25.121c4.6914 0 8.4844-3.793 8.4844-8.4844 0-4.6914-3.793-8.4844-8.4844-8.4844h-25.121l17.766-17.766c3.3164-3.3125 3.3164-8.6836 0-12-3.3125-3.3125-8.6836-3.3125-11.996 0l-17.766 17.766v-25.125c0-4.6914-3.793-8.4844-8.4844-8.4844-4.6914 0-8.4844 3.7969-8.4844 8.4844v25.125l-17.766-17.766c-3.3125-3.3125-8.6836-3.3125-12 0-3.3125 3.3125-3.3125 8.6836 0 12l17.766 17.766h-25.125c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.7969 8.4844 8.4844 8.4844h25.125l-17.766 17.766c-3.3125 3.3125-3.3125 8.6836 0 11.996 3.3125 3.3164 8.6836 3.3164 12 0l17.766-17.766v25.121c0 4.6914 3.7969 8.4844 8.4844 8.4844 4.6914 0 8.4844-3.793 8.4844-8.4844v-25.121z"/>
    <path d="m538.88 487.89h-25.125l17.766-17.766c3.3125-3.3125 3.3125-8.6836 0-11.996s-8.6836-3.3125-12 0l-17.766 17.762v-25.121c0-4.6914-3.7969-8.4844-8.4844-8.4844-4.6914 0-8.4844 3.7969-8.4844 8.4844v25.125l-17.766-17.766c-3.3125-3.3125-8.6836-3.3125-11.996 0s-3.3125 8.6836 0 11.996l17.762 17.766h-25.121c-4.6914 0-8.4844 3.7969-8.4844 8.4844 0 4.6914 3.7969 8.4844 8.4844 8.4844h25.117l-17.758 17.758c-3.3125 3.3125-3.3125 8.6836 0 11.996s8.6836 3.3164 11.996 0l17.766-17.762v25.129c0 4.6914 3.7969 8.4844 8.4844 8.4844 4.6914 0 8.4844-3.7969 8.4844-8.4844v-25.117l17.758 17.758c3.3125 3.3125 8.6836 3.3125 11.996 0 3.3164-3.3125 3.3164-8.6836 0-12l-17.762-17.766h25.129c4.6914 0 8.4844-3.7969 8.4844-8.4844 0.003906-4.6836-3.7891-8.4805-8.4805-8.4805z"/>
    <path d="m455.06 381.94c-4.0781-2.3281-9.2539-0.85547-11.551 3.2305l-30.66 54.449c-2.3047 4.0781-0.85547 9.2578 3.2305 11.551 3.9805 2.2695 9.2109 0.92188 11.551-3.2305l30.656-54.449c2.3086-4.0781 0.85938-9.2539-3.2266-11.551z"/>
    <path d="m493 420.27 15.328-27.219c2.3047-4.0781 0.85547-9.2539-3.2305-11.551-4.0742-2.3203-9.2539-0.85547-11.551 3.2305l-15.328 27.219c-2.3047 4.0781-0.85547 9.2539 3.2305 11.551 3.9805 2.2695 9.2109 0.92188 11.551-3.2305z"/>
    <path d="m362.8 456.4c-4.2773-1.9375-9.2969-0.03125-11.227 4.2344l-31.281 69.105c-1.9297 4.2695-0.03125 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l31.281-69.105c1.9336-4.2695 0.035156-9.2969-4.2344-11.227z"/>
    <path d="m417.01 473.07c-4.2852-1.9297-9.2969-0.03125-11.227 4.2344l-20.012 44.207c-1.9297 4.2656-0.03125 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l20.012-44.207c1.9336-4.2656 0.035156-9.293-4.2344-11.227z"/>
    <path d="m276.02 456.4c-4.2656-1.9375-9.2969-0.03125-11.227 4.2344l-25.289 55.863c-1.9297 4.2656-0.042969 9.2969 4.2344 11.227 4.2383 1.918 9.2891 0.054688 11.227-4.2344l25.289-55.863c1.9297-4.2695 0.039062-9.2969-4.2344-11.227z"/>
    <path d="m329.84 417.21c-4.2852-1.9375-9.2969-0.03125-11.227 4.2344l-25.289 55.863c-1.9297 4.2695-0.042969 9.2969 4.2344 11.227 4.2383 1.918 9.2852 0.054688 11.227-4.2344l25.289-55.863c1.9297-4.2656 0.042969-9.2969-4.2344-11.227z"/>
    <path d="m244.73 394.84c-4.2109-2.0312-9.2891-0.25-11.328 3.9688l-39.73 82.578c-2.0312 4.2266-0.25781 9.2969 3.9688 11.328 4.1641 2.0078 9.2656 0.29297 11.328-3.9688l39.73-82.578c2.0312-4.2266 0.25781-9.2969-3.9688-11.328z"/>
    </svg>
    `
    },
    {
        name: "Hail shower (night)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m511.05 339.62h-347.54c-51.562 0-93.516-41.957-93.516-93.523 0-49.184 38.168-89.617 86.438-93.25 4.3047-47.602 44.434-85.031 93.133-85.031 12.082 0 24.105 2.375 35.266 6.9297 20.543-45.07 66.031-74.742 116.02-74.742 60.754 0 113.3 43.668 124.98 102.66 58.945 7.3438 104.16 57.895 104.16 118.01 0 65.59-53.352 118.95-118.95 118.95zm-347.57-169.53c-41.891 0-75.98 34.094-75.98 76.008 0 41.922 34.098 76.02 76.016 76.02h347.54c55.934 0 101.45-45.508 101.45-101.45 0-53.262-41.613-97.715-94.73-101.2-4.1328-0.26953-7.5156-3.4023-8.0977-7.5078-7.6211-53.84-54.41-94.449-108.82-94.449-45.867 0-87.352 28.969-103.21 72.082-0.875 2.375-2.7344 4.2578-5.1055 5.1562-2.3672 0.89062-5.0039 0.73047-7.2422-0.46484-10.945-5.8633-23.301-8.9648-35.73-8.9648-41.832 0-75.883 33.969-76.016 75.77 0.003906 0.10547 0.003906 0.21094 0.003906 0.31641 0 4.8281-3.9219 8.75-8.75 8.75-0.44531 0-0.87891-0.027343-1.3164-0.0625 0 0.003907-0.007813 0.003907-0.011719 0.003907z"/>
    <path d="m198.61 427.12c-19.297 0-35-15.703-35-35 0-19.297 15.703-35 35-35s35 15.703 35 35c0 19.301-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6484-7.8516-17.5-17.5-17.5z"/>
    <path d="m272.66 491.12c-19.297 0-35-15.703-35-35 0-19.297 15.703-35 35-35s35 15.703 35 35c0 19.297-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6523-7.8516-17.5-17.5-17.5z"/>
    <path d="m350 427.12c-19.297 0-35-15.703-35-35 0-19.297 15.699-35 35-35s35 15.703 35 35c0 19.301-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6484-7.8516-17.5-17.5-17.5z"/>
    <path d="m427.34 491.12c-19.293 0-35-15.703-35-35 0-19.297 15.707-35 35-35 19.297 0 35 15.703 35 35 0 19.297-15.699 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8516 17.5 17.5 17.5 9.6523 0 17.5-7.8477 17.5-17.5 0-9.6523-7.8477-17.5-17.5-17.5z"/>
    <path d="m501.39 427.12c-19.293 0-35-15.703-35-35 0-19.297 15.707-35 35-35 19.301 0 35 15.703 35 35 0 19.301-15.695 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8516 17.5 17.5 17.5 9.6562 0 17.5-7.8477 17.5-17.5 0-9.6484-7.8438-17.5-17.5-17.5z"/>
    <path d="m198.61 560c-19.297 0-35-15.703-35-35s15.703-35 35-35 35 15.703 35 35-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5s7.8477 17.5 17.5 17.5 17.5-7.8477 17.5-17.5-7.8516-17.5-17.5-17.5z"/>
    <path d="m350 560c-19.297 0-35-15.703-35-35s15.699-35 35-35 35 15.703 35 35-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5s7.8477 17.5 17.5 17.5 17.5-7.8477 17.5-17.5-7.8516-17.5-17.5-17.5z"/>
    <path d="m501.39 560c-19.293 0-35-15.703-35-35s15.707-35 35-35c19.301 0 35 15.703 35 35s-15.695 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5s7.8516 17.5 17.5 17.5c9.6562 0 17.5-7.8477 17.5-17.5s-7.8438-17.5-17.5-17.5z"/>
    </svg>
    `
    },
    {
        name: "Hail shower (day)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m511.05 339.62h-347.54c-51.562 0-93.516-41.957-93.516-93.523 0-49.184 38.168-89.617 86.438-93.25 4.3047-47.602 44.434-85.031 93.133-85.031 12.082 0 24.105 2.375 35.266 6.9297 20.543-45.07 66.031-74.742 116.02-74.742 60.754 0 113.3 43.668 124.98 102.66 58.945 7.3438 104.16 57.895 104.16 118.01 0 65.59-53.352 118.95-118.95 118.95zm-347.57-169.53c-41.891 0-75.98 34.094-75.98 76.008 0 41.922 34.098 76.02 76.016 76.02h347.54c55.934 0 101.45-45.508 101.45-101.45 0-53.262-41.613-97.715-94.73-101.2-4.1328-0.26953-7.5156-3.4023-8.0977-7.5078-7.6211-53.84-54.41-94.449-108.82-94.449-45.867 0-87.352 28.969-103.21 72.082-0.875 2.375-2.7344 4.2578-5.1055 5.1562-2.3672 0.89062-5.0039 0.73047-7.2422-0.46484-10.945-5.8633-23.301-8.9648-35.73-8.9648-41.832 0-75.883 33.969-76.016 75.77 0.003906 0.10547 0.003906 0.21094 0.003906 0.31641 0 4.8281-3.9219 8.75-8.75 8.75-0.44531 0-0.87891-0.027343-1.3164-0.0625 0 0.003907-0.007813 0.003907-0.011719 0.003907z"/>
    <path d="m198.61 427.12c-19.297 0-35-15.703-35-35 0-19.297 15.703-35 35-35s35 15.703 35 35c0 19.301-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6484-7.8516-17.5-17.5-17.5z"/>
    <path d="m272.66 491.12c-19.297 0-35-15.703-35-35 0-19.297 15.703-35 35-35s35 15.703 35 35c0 19.297-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6523-7.8516-17.5-17.5-17.5z"/>
    <path d="m350 427.12c-19.297 0-35-15.703-35-35 0-19.297 15.699-35 35-35s35 15.703 35 35c0 19.301-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6484-7.8516-17.5-17.5-17.5z"/>
    <path d="m427.34 491.12c-19.293 0-35-15.703-35-35 0-19.297 15.707-35 35-35 19.297 0 35 15.703 35 35 0 19.297-15.699 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8516 17.5 17.5 17.5 9.6523 0 17.5-7.8477 17.5-17.5 0-9.6523-7.8477-17.5-17.5-17.5z"/>
    <path d="m501.39 427.12c-19.293 0-35-15.703-35-35 0-19.297 15.707-35 35-35 19.301 0 35 15.703 35 35 0 19.301-15.695 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8516 17.5 17.5 17.5 9.6562 0 17.5-7.8477 17.5-17.5 0-9.6484-7.8438-17.5-17.5-17.5z"/>
    <path d="m198.61 560c-19.297 0-35-15.703-35-35s15.703-35 35-35 35 15.703 35 35-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5s7.8477 17.5 17.5 17.5 17.5-7.8477 17.5-17.5-7.8516-17.5-17.5-17.5z"/>
    <path d="m350 560c-19.297 0-35-15.703-35-35s15.699-35 35-35 35 15.703 35 35-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5s7.8477 17.5 17.5 17.5 17.5-7.8477 17.5-17.5-7.8516-17.5-17.5-17.5z"/>
    <path d="m501.39 560c-19.293 0-35-15.703-35-35s15.707-35 35-35c19.301 0 35 15.703 35 35s-15.695 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5s7.8516 17.5 17.5 17.5c9.6562 0 17.5-7.8477 17.5-17.5s-7.8438-17.5-17.5-17.5z"/>
    </svg>
    `
    },
    {
        name: "Hail", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m511.05 339.62h-347.54c-51.562 0-93.516-41.957-93.516-93.523 0-49.184 38.168-89.617 86.438-93.25 4.3047-47.602 44.434-85.031 93.133-85.031 12.082 0 24.105 2.375 35.266 6.9297 20.543-45.07 66.031-74.742 116.02-74.742 60.754 0 113.3 43.668 124.98 102.66 58.945 7.3438 104.16 57.895 104.16 118.01 0 65.59-53.352 118.95-118.95 118.95zm-347.57-169.53c-41.891 0-75.98 34.094-75.98 76.008 0 41.922 34.098 76.02 76.016 76.02h347.54c55.934 0 101.45-45.508 101.45-101.45 0-53.262-41.613-97.715-94.73-101.2-4.1328-0.26953-7.5156-3.4023-8.0977-7.5078-7.6211-53.84-54.41-94.449-108.82-94.449-45.867 0-87.352 28.969-103.21 72.082-0.875 2.375-2.7344 4.2578-5.1055 5.1562-2.3672 0.89062-5.0039 0.73047-7.2422-0.46484-10.945-5.8633-23.301-8.9648-35.73-8.9648-41.832 0-75.883 33.969-76.016 75.77 0.003906 0.10547 0.003906 0.21094 0.003906 0.31641 0 4.8281-3.9219 8.75-8.75 8.75-0.44531 0-0.87891-0.027343-1.3164-0.0625 0 0.003907-0.007813 0.003907-0.011719 0.003907z"/>
    <path d="m198.61 427.12c-19.297 0-35-15.703-35-35 0-19.297 15.703-35 35-35s35 15.703 35 35c0 19.301-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6484-7.8516-17.5-17.5-17.5z"/>
    <path d="m272.66 491.12c-19.297 0-35-15.703-35-35 0-19.297 15.703-35 35-35s35 15.703 35 35c0 19.297-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6523-7.8516-17.5-17.5-17.5z"/>
    <path d="m350 427.12c-19.297 0-35-15.703-35-35 0-19.297 15.699-35 35-35s35 15.703 35 35c0 19.301-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8477 17.5 17.5 17.5s17.5-7.8477 17.5-17.5c0-9.6484-7.8516-17.5-17.5-17.5z"/>
    <path d="m427.34 491.12c-19.293 0-35-15.703-35-35 0-19.297 15.707-35 35-35 19.297 0 35 15.703 35 35 0 19.297-15.699 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8516 17.5 17.5 17.5 9.6523 0 17.5-7.8477 17.5-17.5 0-9.6523-7.8477-17.5-17.5-17.5z"/>
    <path d="m501.39 427.12c-19.293 0-35-15.703-35-35 0-19.297 15.707-35 35-35 19.301 0 35 15.703 35 35 0 19.301-15.695 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5 0 9.6523 7.8516 17.5 17.5 17.5 9.6562 0 17.5-7.8477 17.5-17.5 0-9.6484-7.8438-17.5-17.5-17.5z"/>
    <path d="m198.61 560c-19.297 0-35-15.703-35-35s15.703-35 35-35 35 15.703 35 35-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5s7.8477 17.5 17.5 17.5 17.5-7.8477 17.5-17.5-7.8516-17.5-17.5-17.5z"/>
    <path d="m350 560c-19.297 0-35-15.703-35-35s15.699-35 35-35 35 15.703 35 35-15.703 35-35 35zm0-52.5c-9.6523 0-17.5 7.8477-17.5 17.5s7.8477 17.5 17.5 17.5 17.5-7.8477 17.5-17.5-7.8516-17.5-17.5-17.5z"/>
    <path d="m501.39 560c-19.293 0-35-15.703-35-35s15.707-35 35-35c19.301 0 35 15.703 35 35s-15.695 35-35 35zm0-52.5c-9.6484 0-17.5 7.8477-17.5 17.5s7.8516 17.5 17.5 17.5c9.6562 0 17.5-7.8477 17.5-17.5s-7.8438-17.5-17.5-17.5z"/>
    </svg>
    `
    },
    {
        name: "Light snow shower (night)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m611.79 261.79h-69.547l30.922-23.918c7.9453-6.1602 9.4141-17.59 3.2578-25.551-6.168-7.957-17.613-9.4258-25.555-3.2578l-68.145 52.727h-88.766l59.422-59.426c38.145-5.207 79.688-10.676 87.215-11.309 2.3008 0.066406 4.7266-0.33984 7.0547-1.2305 9.375-3.6328 14.012-14.195 10.383-23.574-5.2539-13.508-15.531-12.238-34.074-9.9453-7.7852 0.95312-17.836 2.2578-28.137 3.6172l52.164-52.168c7.1133-7.1055 7.1133-18.645 0-25.75-7.1133-7.1055-18.633-7.1055-25.75 0l-50.426 50.438 5.0391-39.562c1.2695-9.9805-5.7812-19.102-15.758-20.367-9.9062-1.2422-19.086 5.7891-20.379 15.754l-11.004 86.258-61.504 61.496v-85.082c22.984-30.219 47.738-62.469 52.52-68.141 1.7188-1.6289 3.1367-3.6172 4.1406-5.918 4.0312-9.2188-0.19531-19.949-9.4141-23.977-13.219-5.7617-19.562 2.3398-31.066 17.082-4.543 5.8086-10.277 13.227-16.184 20.934l-0.003907-72.715c0.007813-10.055-8.1484-18.207-18.199-18.207-10.055 0-18.207 8.1523-18.207 18.207v73.305l-25.559-33.047c-6.1562-7.957-17.59-9.4141-25.551-3.2578-7.9453 6.1602-9.4219 17.59-3.2578 25.551l54.371 70.262v85.008l-61.59-61.566c-5.0508-37.082-10.172-76.176-10.781-83.445 0.054687-2.3398-0.33984-4.75-1.2539-7.0625-3.6641-9.3711-14.23-13.996-23.582-10.34-13.457 5.2539-12.203 15.496-9.9141 34.062 0.83594 6.8398 1.9375 15.406 3.1211 24.379l-50.051-50.047c-7.1055-7.1055-18.645-7.1055-25.75 0-7.1055 7.1055-7.1055 18.645 0 25.75l52.551 52.551-43.293-5.5273c-9.918-1.2422-19.094 5.7812-20.375 15.754-1.2695 9.9805 5.7852 19.102 15.754 20.375l89.992 11.492 59.387 59.387h-88.84c-29.574-22.496-60.453-46.203-65.996-50.891-1.6055-1.6875-3.5664-3.1094-5.8359-4.0977-9.2109-4.0781-19.965 0.10547-24.02 9.2969-5.8594 13.262 2.2695 19.613 17.043 31.145 5.2695 4.1172 11.879 9.2188 18.824 14.555l-69-0.003906c-10.062-0.011719-18.207 8.1367-18.207 18.195 0 10.055 8.1523 18.207 18.207 18.207h73.785l-35.148 27.191c-7.9453 6.1562-9.4102 17.59-3.2578 25.551 3.5898 4.6484 8.9727 7.0742 14.414 7.0742 3.8906 0 7.8164-1.2422 11.133-3.8203l72.379-55.988h84.527l-63.203 63.211c-37.062 5.0508-76.172 10.191-83.434 10.793-2.3984-0.16797-4.75 0.34766-7.0664 1.2539-9.3633 3.6523-13.988 14.219-10.34 23.594 5.2539 13.465 15.496 12.188 34.066 9.9062 6.8398-0.83984 15.395-1.9336 24.367-3.125l-48.395 48.406c-7.1055 7.1016-7.1055 18.633 0 25.746 3.5625 3.5625 8.2227 5.332 12.875 5.332 4.6523 0 9.3203-1.7695 12.871-5.332l50.914-50.914-5.5234 43.32c-1.2695 9.9688 5.7891 19.098 15.754 20.367 0.78516 0.10547 1.5625 0.15625 2.3281 0.15625 9.0234 0 16.867-6.7109 18.043-15.918l11.492-90.012 61.016-61.023v88.352c-22.988 30.242-47.766 62.488-52.543 68.145-1.7188 1.6367-3.1406 3.6406-4.1445 5.9531-3.9883 9.2305 0.25781 19.953 9.4805 23.941 2.9023 1.2656 5.4609 1.8477 7.8242 1.8477 8.4062 0 14.219-7.4609 23.203-18.957 4.5352-5.8125 10.266-13.234 16.18-20.945l0.007812 69.488c0 10.059 8.1523 18.211 18.207 18.211 10.055 0 18.207-8.1523 18.207-18.211v-70.031l25.551 33.043c6.1602 7.9453 17.598 9.4023 25.551 3.2578 7.957-6.168 9.4258-17.598 3.2578-25.555l-54.352-70.27-0.003907-88.266 61.055 61.051c5.207 38.156 10.68 79.727 11.309 87.238-0.066406 2.4023 0.35938 4.8672 1.3203 7.2422 2.8438 7.1055 9.6836 11.418 16.898 11.418 2.2617 0 4.5586-0.42578 6.7891-1.3203 13.266-5.3438 11.941-16.129 9.7461-33.996-0.95703-7.7852-2.25-17.836-3.6172-28.137l50.543 50.523c3.5508 3.5625 8.2227 5.332 12.875 5.332 4.6484 0 9.3203-1.7695 12.871-5.332 7.1133-7.1016 7.1133-18.645 0-25.758l-48.793-48.785 39.555 5.0469c9.9258 1.2422 19.086-5.7852 20.379-15.758 1.2695-9.9648-5.7969-19.094-15.77-20.379l-86.254-11.004-63.129-63.145h84.555c30.84 23.438 64.516 49.277 70.332 54.184 1.6484 1.7305 3.6523 3.1602 5.9805 4.1719 2.3477 1.0078 4.7812 1.4805 7.1836 1.4805 7.0547 0 13.777-4.1289 16.75-11.023 5.6602-13.184-2.4297-19.5-17.145-30.98-6.3359-4.9492-14.605-11.32-23.074-17.832h73.238c10.059 0 18.211-8.1484 18.211-18.207-0.019531-10.07-8.168-18.207-18.227-18.207z" fill="#010101"/>
  </svg>
    `
    },
    {
        name: "Light snow shower (day)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m611.79 261.79h-69.547l30.922-23.918c7.9453-6.1602 9.4141-17.59 3.2578-25.551-6.168-7.957-17.613-9.4258-25.555-3.2578l-68.145 52.727h-88.766l59.422-59.426c38.145-5.207 79.688-10.676 87.215-11.309 2.3008 0.066406 4.7266-0.33984 7.0547-1.2305 9.375-3.6328 14.012-14.195 10.383-23.574-5.2539-13.508-15.531-12.238-34.074-9.9453-7.7852 0.95312-17.836 2.2578-28.137 3.6172l52.164-52.168c7.1133-7.1055 7.1133-18.645 0-25.75-7.1133-7.1055-18.633-7.1055-25.75 0l-50.426 50.438 5.0391-39.562c1.2695-9.9805-5.7812-19.102-15.758-20.367-9.9062-1.2422-19.086 5.7891-20.379 15.754l-11.004 86.258-61.504 61.496v-85.082c22.984-30.219 47.738-62.469 52.52-68.141 1.7188-1.6289 3.1367-3.6172 4.1406-5.918 4.0312-9.2188-0.19531-19.949-9.4141-23.977-13.219-5.7617-19.562 2.3398-31.066 17.082-4.543 5.8086-10.277 13.227-16.184 20.934l-0.003907-72.715c0.007813-10.055-8.1484-18.207-18.199-18.207-10.055 0-18.207 8.1523-18.207 18.207v73.305l-25.559-33.047c-6.1562-7.957-17.59-9.4141-25.551-3.2578-7.9453 6.1602-9.4219 17.59-3.2578 25.551l54.371 70.262v85.008l-61.59-61.566c-5.0508-37.082-10.172-76.176-10.781-83.445 0.054687-2.3398-0.33984-4.75-1.2539-7.0625-3.6641-9.3711-14.23-13.996-23.582-10.34-13.457 5.2539-12.203 15.496-9.9141 34.062 0.83594 6.8398 1.9375 15.406 3.1211 24.379l-50.051-50.047c-7.1055-7.1055-18.645-7.1055-25.75 0-7.1055 7.1055-7.1055 18.645 0 25.75l52.551 52.551-43.293-5.5273c-9.918-1.2422-19.094 5.7812-20.375 15.754-1.2695 9.9805 5.7852 19.102 15.754 20.375l89.992 11.492 59.387 59.387h-88.84c-29.574-22.496-60.453-46.203-65.996-50.891-1.6055-1.6875-3.5664-3.1094-5.8359-4.0977-9.2109-4.0781-19.965 0.10547-24.02 9.2969-5.8594 13.262 2.2695 19.613 17.043 31.145 5.2695 4.1172 11.879 9.2188 18.824 14.555l-69-0.003906c-10.062-0.011719-18.207 8.1367-18.207 18.195 0 10.055 8.1523 18.207 18.207 18.207h73.785l-35.148 27.191c-7.9453 6.1562-9.4102 17.59-3.2578 25.551 3.5898 4.6484 8.9727 7.0742 14.414 7.0742 3.8906 0 7.8164-1.2422 11.133-3.8203l72.379-55.988h84.527l-63.203 63.211c-37.062 5.0508-76.172 10.191-83.434 10.793-2.3984-0.16797-4.75 0.34766-7.0664 1.2539-9.3633 3.6523-13.988 14.219-10.34 23.594 5.2539 13.465 15.496 12.188 34.066 9.9062 6.8398-0.83984 15.395-1.9336 24.367-3.125l-48.395 48.406c-7.1055 7.1016-7.1055 18.633 0 25.746 3.5625 3.5625 8.2227 5.332 12.875 5.332 4.6523 0 9.3203-1.7695 12.871-5.332l50.914-50.914-5.5234 43.32c-1.2695 9.9688 5.7891 19.098 15.754 20.367 0.78516 0.10547 1.5625 0.15625 2.3281 0.15625 9.0234 0 16.867-6.7109 18.043-15.918l11.492-90.012 61.016-61.023v88.352c-22.988 30.242-47.766 62.488-52.543 68.145-1.7188 1.6367-3.1406 3.6406-4.1445 5.9531-3.9883 9.2305 0.25781 19.953 9.4805 23.941 2.9023 1.2656 5.4609 1.8477 7.8242 1.8477 8.4062 0 14.219-7.4609 23.203-18.957 4.5352-5.8125 10.266-13.234 16.18-20.945l0.007812 69.488c0 10.059 8.1523 18.211 18.207 18.211 10.055 0 18.207-8.1523 18.207-18.211v-70.031l25.551 33.043c6.1602 7.9453 17.598 9.4023 25.551 3.2578 7.957-6.168 9.4258-17.598 3.2578-25.555l-54.352-70.27-0.003907-88.266 61.055 61.051c5.207 38.156 10.68 79.727 11.309 87.238-0.066406 2.4023 0.35938 4.8672 1.3203 7.2422 2.8438 7.1055 9.6836 11.418 16.898 11.418 2.2617 0 4.5586-0.42578 6.7891-1.3203 13.266-5.3438 11.941-16.129 9.7461-33.996-0.95703-7.7852-2.25-17.836-3.6172-28.137l50.543 50.523c3.5508 3.5625 8.2227 5.332 12.875 5.332 4.6484 0 9.3203-1.7695 12.871-5.332 7.1133-7.1016 7.1133-18.645 0-25.758l-48.793-48.785 39.555 5.0469c9.9258 1.2422 19.086-5.7852 20.379-15.758 1.2695-9.9648-5.7969-19.094-15.77-20.379l-86.254-11.004-63.129-63.145h84.555c30.84 23.438 64.516 49.277 70.332 54.184 1.6484 1.7305 3.6523 3.1602 5.9805 4.1719 2.3477 1.0078 4.7812 1.4805 7.1836 1.4805 7.0547 0 13.777-4.1289 16.75-11.023 5.6602-13.184-2.4297-19.5-17.145-30.98-6.3359-4.9492-14.605-11.32-23.074-17.832h73.238c10.059 0 18.211-8.1484 18.211-18.207-0.019531-10.07-8.168-18.207-18.227-18.207z" fill="#010101"/>
  </svg>
    `
    },
    {
        name: "Light snow", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="m611.79 261.79h-69.547l30.922-23.918c7.9453-6.1602 9.4141-17.59 3.2578-25.551-6.168-7.957-17.613-9.4258-25.555-3.2578l-68.145 52.727h-88.766l59.422-59.426c38.145-5.207 79.688-10.676 87.215-11.309 2.3008 0.066406 4.7266-0.33984 7.0547-1.2305 9.375-3.6328 14.012-14.195 10.383-23.574-5.2539-13.508-15.531-12.238-34.074-9.9453-7.7852 0.95312-17.836 2.2578-28.137 3.6172l52.164-52.168c7.1133-7.1055 7.1133-18.645 0-25.75-7.1133-7.1055-18.633-7.1055-25.75 0l-50.426 50.438 5.0391-39.562c1.2695-9.9805-5.7812-19.102-15.758-20.367-9.9062-1.2422-19.086 5.7891-20.379 15.754l-11.004 86.258-61.504 61.496v-85.082c22.984-30.219 47.738-62.469 52.52-68.141 1.7188-1.6289 3.1367-3.6172 4.1406-5.918 4.0312-9.2188-0.19531-19.949-9.4141-23.977-13.219-5.7617-19.562 2.3398-31.066 17.082-4.543 5.8086-10.277 13.227-16.184 20.934l-0.003907-72.715c0.007813-10.055-8.1484-18.207-18.199-18.207-10.055 0-18.207 8.1523-18.207 18.207v73.305l-25.559-33.047c-6.1562-7.957-17.59-9.4141-25.551-3.2578-7.9453 6.1602-9.4219 17.59-3.2578 25.551l54.371 70.262v85.008l-61.59-61.566c-5.0508-37.082-10.172-76.176-10.781-83.445 0.054687-2.3398-0.33984-4.75-1.2539-7.0625-3.6641-9.3711-14.23-13.996-23.582-10.34-13.457 5.2539-12.203 15.496-9.9141 34.062 0.83594 6.8398 1.9375 15.406 3.1211 24.379l-50.051-50.047c-7.1055-7.1055-18.645-7.1055-25.75 0-7.1055 7.1055-7.1055 18.645 0 25.75l52.551 52.551-43.293-5.5273c-9.918-1.2422-19.094 5.7812-20.375 15.754-1.2695 9.9805 5.7852 19.102 15.754 20.375l89.992 11.492 59.387 59.387h-88.84c-29.574-22.496-60.453-46.203-65.996-50.891-1.6055-1.6875-3.5664-3.1094-5.8359-4.0977-9.2109-4.0781-19.965 0.10547-24.02 9.2969-5.8594 13.262 2.2695 19.613 17.043 31.145 5.2695 4.1172 11.879 9.2188 18.824 14.555l-69-0.003906c-10.062-0.011719-18.207 8.1367-18.207 18.195 0 10.055 8.1523 18.207 18.207 18.207h73.785l-35.148 27.191c-7.9453 6.1562-9.4102 17.59-3.2578 25.551 3.5898 4.6484 8.9727 7.0742 14.414 7.0742 3.8906 0 7.8164-1.2422 11.133-3.8203l72.379-55.988h84.527l-63.203 63.211c-37.062 5.0508-76.172 10.191-83.434 10.793-2.3984-0.16797-4.75 0.34766-7.0664 1.2539-9.3633 3.6523-13.988 14.219-10.34 23.594 5.2539 13.465 15.496 12.188 34.066 9.9062 6.8398-0.83984 15.395-1.9336 24.367-3.125l-48.395 48.406c-7.1055 7.1016-7.1055 18.633 0 25.746 3.5625 3.5625 8.2227 5.332 12.875 5.332 4.6523 0 9.3203-1.7695 12.871-5.332l50.914-50.914-5.5234 43.32c-1.2695 9.9688 5.7891 19.098 15.754 20.367 0.78516 0.10547 1.5625 0.15625 2.3281 0.15625 9.0234 0 16.867-6.7109 18.043-15.918l11.492-90.012 61.016-61.023v88.352c-22.988 30.242-47.766 62.488-52.543 68.145-1.7188 1.6367-3.1406 3.6406-4.1445 5.9531-3.9883 9.2305 0.25781 19.953 9.4805 23.941 2.9023 1.2656 5.4609 1.8477 7.8242 1.8477 8.4062 0 14.219-7.4609 23.203-18.957 4.5352-5.8125 10.266-13.234 16.18-20.945l0.007812 69.488c0 10.059 8.1523 18.211 18.207 18.211 10.055 0 18.207-8.1523 18.207-18.211v-70.031l25.551 33.043c6.1602 7.9453 17.598 9.4023 25.551 3.2578 7.957-6.168 9.4258-17.598 3.2578-25.555l-54.352-70.27-0.003907-88.266 61.055 61.051c5.207 38.156 10.68 79.727 11.309 87.238-0.066406 2.4023 0.35938 4.8672 1.3203 7.2422 2.8438 7.1055 9.6836 11.418 16.898 11.418 2.2617 0 4.5586-0.42578 6.7891-1.3203 13.266-5.3438 11.941-16.129 9.7461-33.996-0.95703-7.7852-2.25-17.836-3.6172-28.137l50.543 50.523c3.5508 3.5625 8.2227 5.332 12.875 5.332 4.6484 0 9.3203-1.7695 12.871-5.332 7.1133-7.1016 7.1133-18.645 0-25.758l-48.793-48.785 39.555 5.0469c9.9258 1.2422 19.086-5.7852 20.379-15.758 1.2695-9.9648-5.7969-19.094-15.77-20.379l-86.254-11.004-63.129-63.145h84.555c30.84 23.438 64.516 49.277 70.332 54.184 1.6484 1.7305 3.6523 3.1602 5.9805 4.1719 2.3477 1.0078 4.7812 1.4805 7.1836 1.4805 7.0547 0 13.777-4.1289 16.75-11.023 5.6602-13.184-2.4297-19.5-17.145-30.98-6.3359-4.9492-14.605-11.32-23.074-17.832h73.238c10.059 0 18.211-8.1484 18.211-18.207-0.019531-10.07-8.168-18.207-18.227-18.207z" fill="#010101"/>
  </svg>
    `
    },
    {
        name: "Heavy snow shower (night)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="m319.2 407.12c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-3.918-7.2773c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-3.9219-2.2383-7.2812-6.1602-7.8398l-8.3984-1.1211c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.484 26.883v-53.199l33.039-24.641c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7188c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.039 14.559v-20.16c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-20.16-14.562c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.1211 1.6797-1.6797 3.3594-1.1211 5.0391 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.762l-46.48-26.879-5.6016-40.324c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.3984 1.1211c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.2773c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-38.078-16.238c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-3.3594 7.8398c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 6.7188c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.637c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641v-53.199l46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c1.6797 0 3.3594-1.1211 4.4805-2.8008 1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016l-3.3594-7.8398c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879z"/>
  <path d="m603.68 356.16c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879 38.078 16.238c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-4.4805-6.7148c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-3.9219-2.2383-7.2812-6.1602-7.8398l-8.3984-1.1211c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.48 26.879-0.003906-53.195 33.039-24.641c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7188c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.598 15.117v-20.16c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-19.039-14.559c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.1211 1.6797-1.6797 3.3594-1.1211 5.0391 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.199l-46.48-26.879-5.0391-40.879c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.3984 1.1211c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.8398c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-39.207-16.246c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-2.793 7.2773c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 7.2812c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.641c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641v-53.199l46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c1.6797 0 3.3594-1.1211 4.4805-2.8008 1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016z"/>
  <path d="m374.64 232.4c1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016l-3.918-7.8359c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879 38.078 16.238c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-4.4805-7.2812c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-2.793-2.2422-6.7148-6.1602-6.7148l-8.4023-1.1172c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.48 26.879v-53.199l33.039-25.199c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7227c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.039 14.559v-19.598c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-19.602-15.121c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.6797 1.6797-2.2383 3.3594-2.2383 5.6016 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.199l-46.48-26.879-5.0391-40.879c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.4023 1.6758c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.8398c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-38.078-16.238c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-3.3594 7.8398c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 7.2812c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.641c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641 0.003906-54.328 46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c3.9219-0.55469 5.6016-1.6758 6.7227-2.7969z"/>
</svg>`
    },
    {
        name: "Heavy snow shower (day)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="m319.2 407.12c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-3.918-7.2773c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-3.9219-2.2383-7.2812-6.1602-7.8398l-8.3984-1.1211c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.484 26.883v-53.199l33.039-24.641c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7188c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.039 14.559v-20.16c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-20.16-14.562c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.1211 1.6797-1.6797 3.3594-1.1211 5.0391 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.762l-46.48-26.879-5.6016-40.324c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.3984 1.1211c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.2773c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-38.078-16.238c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-3.3594 7.8398c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 6.7188c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.637c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641v-53.199l46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c1.6797 0 3.3594-1.1211 4.4805-2.8008 1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016l-3.3594-7.8398c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879z"/>
  <path d="m603.68 356.16c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879 38.078 16.238c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-4.4805-6.7148c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-3.9219-2.2383-7.2812-6.1602-7.8398l-8.3984-1.1211c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.48 26.879-0.003906-53.195 33.039-24.641c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7188c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.598 15.117v-20.16c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-19.039-14.559c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.1211 1.6797-1.6797 3.3594-1.1211 5.0391 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.199l-46.48-26.879-5.0391-40.879c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.3984 1.1211c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.8398c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-39.207-16.246c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-2.793 7.2773c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 7.2812c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.641c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641v-53.199l46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c1.6797 0 3.3594-1.1211 4.4805-2.8008 1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016z"/>
  <path d="m374.64 232.4c1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016l-3.918-7.8359c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879 38.078 16.238c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-4.4805-7.2812c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-2.793-2.2422-6.7148-6.1602-6.7148l-8.4023-1.1172c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.48 26.879v-53.199l33.039-25.199c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7227c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.039 14.559v-19.598c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-19.602-15.121c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.6797 1.6797-2.2383 3.3594-2.2383 5.6016 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.199l-46.48-26.879-5.0391-40.879c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.4023 1.6758c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.8398c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-38.078-16.238c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-3.3594 7.8398c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 7.2812c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.641c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641 0.003906-54.328 46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c3.9219-0.55469 5.6016-1.6758 6.7227-2.7969z"/>
</svg>
    `
    },
    {
        name: "Heavy snow", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="m319.2 407.12c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-3.918-7.2773c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-3.9219-2.2383-7.2812-6.1602-7.8398l-8.3984-1.1211c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.484 26.883v-53.199l33.039-24.641c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7188c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.039 14.559v-20.16c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-20.16-14.562c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.1211 1.6797-1.6797 3.3594-1.1211 5.0391 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.762l-46.48-26.879-5.6016-40.324c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.3984 1.1211c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.2773c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-38.078-16.238c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-3.3594 7.8398c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 6.7188c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.637c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641v-53.199l46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c1.6797 0 3.3594-1.1211 4.4805-2.8008 1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016l-3.3594-7.8398c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879z"/>
  <path d="m603.68 356.16c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879 38.078 16.238c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-4.4805-6.7148c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-3.9219-2.2383-7.2812-6.1602-7.8398l-8.3984-1.1211c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.48 26.879-0.003906-53.195 33.039-24.641c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7188c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.598 15.117v-20.16c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-19.039-14.559c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.1211 1.6797-1.6797 3.3594-1.1211 5.0391 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.199l-46.48-26.879-5.0391-40.879c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.3984 1.1211c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.8398c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-39.207-16.246c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-2.793 7.2773c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 7.2812c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.641c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641v-53.199l46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c1.6797 0 3.3594-1.1211 4.4805-2.8008 1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016z"/>
  <path d="m374.64 232.4c1.1211-1.6797 1.6797-3.3594 1.6797-5.0391l-2.8008-24.078 17.359 10.078c3.3594 1.6797 7.8398 0.55859 9.5195-2.8008l4.4805-7.2812c1.6797-3.3594 0.55859-7.8398-2.8008-9.5195l-17.359-10.078 22.398-9.5195c1.6797-0.55859 3.3594-2.2383 3.9219-3.9219 0.55859-1.6797 0.55859-3.9219 0-5.6016l-3.918-7.8359c-1.6797-3.3594-5.6016-5.0391-9.5195-3.9219l-38.078 16.238-46.48-26.879 46.48-26.879 38.078 16.238c3.3594 1.6797 7.8398 0 9.5195-3.9219l3.3594-7.8398c0.55859-1.6797 0.55859-3.9219 0-5.6016-0.55859-1.6797-2.2383-3.3594-3.9219-3.9219l-22.398-9.5195 17.359-10.078c3.3594-1.6797 4.4805-6.1602 2.8008-9.5195l-4.4805-7.2812c-1.6797-3.3594-6.1602-4.4805-9.5195-2.8008l-17.359 10.078 2.8008-24.078c0.55859-2.793-2.2422-6.7148-6.1602-6.7148l-8.4023-1.1172c-3.9219-0.55859-7.2812 2.2383-7.8398 6.1602l-5.0391 40.879-46.48 26.879v-53.199l33.039-25.199c3.3594-2.2383 3.9219-6.7188 1.6797-10.078l-5.0391-6.7227c-1.1211-1.6797-2.8008-2.2383-4.4805-2.8008-1.6797-0.55859-3.9219 0-5.0391 1.1211l-19.039 14.559v-19.598c0-3.9219-3.3594-7.2812-7.2812-7.2812h-8.3984c-3.9219 0-7.2812 3.3594-7.2812 7.2812v20.16l-19.602-15.121c-1.6797-1.1211-3.3594-1.6797-5.0391-1.1211-1.6797 0-3.3594 1.1211-4.4805 2.8008l-5.0391 6.7188c-1.6797 1.6797-2.2383 3.3594-2.2383 5.6016 0 1.6797 1.1211 3.3594 2.8008 4.4805l33.039 24.641v53.199l-46.48-26.879-5.0391-40.879c-0.55859-3.9219-3.9219-6.7188-7.8398-6.1602l-8.4023 1.6758c-1.6797 0-3.3594 1.1211-4.4805 2.8008-1.1211 1.6797-1.6797 3.3594-1.6797 5.0391l2.8008 24.078-17.359-10.078c-3.3594-1.6797-7.8398-0.55859-9.5195 2.8008l-4.4805 7.2812c-1.6797 3.3594-0.55859 7.8398 2.8008 9.5195l17.359 10.078-22.398 9.5195c-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219-0.55859 1.6797-0.55859 3.9219 0 5.6016l3.3594 7.8398c0.55859 1.6797 2.2383 3.3594 3.9219 3.9219 1.6797 0.55859 3.9219 0.55859 5.6016 0l38.078-16.238 46.48 26.879-46.48 26.879-38.078-16.238c-1.6797-0.55859-3.9219-0.55859-5.6016 0-1.6797 0.55859-3.3594 2.2383-3.9219 3.9219l-3.3594 7.8398c-1.6797 3.3594 0 7.8398 3.9219 9.5195l22.398 9.5195-17.359 10.078c-3.3594 1.6797-4.4805 6.1602-2.8008 9.5195l4.4805 7.2812c1.6797 3.3594 6.1602 4.4805 9.5195 2.8008l17.359-10.078-2.8008 24.078c0 1.6797 0.55859 3.9219 1.6797 5.0391 1.1211 1.6797 2.8008 2.2383 4.4805 2.8008l8.3984 1.1211c3.9219 0.55859 7.2812-2.2383 7.8398-6.1602l5.0391-40.879 46.48-26.879v53.199l-33.039 24.641c-3.3594 2.2383-3.9219 6.7188-1.6797 10.078l5.0391 6.7188c1.1211 1.6797 2.8008 2.2383 4.4805 2.8008 1.6797 0.55859 3.9219 0 5.0391-1.1211l19.039-14.559v20.16c0 3.9219 3.3594 7.2812 7.2812 7.2812h8.3984c3.9219 0 7.2812-3.3594 7.2812-7.2812v-20.16l19.039 14.559c1.6797 1.1211 3.3594 1.6797 5.0391 1.1211 1.6797 0 3.3594-1.1211 4.4805-2.8008l5.0391-6.7188c2.2383-3.3594 1.6797-7.8398-1.6797-10.078l-33.039-24.641 0.003906-54.328 46.48 26.879 5.0391 40.879c0.55859 3.9219 3.9219 6.7188 7.8398 6.1602l8.3984-1.1211c3.9219-0.55469 5.6016-1.6758 6.7227-2.7969z"/>
</svg>
    `
    },
    {
        name: "Thunder shower (night)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.24 28.982c-0.060687 0-0.11928 0.007673-0.17927 0.009068 0-0.00279 6.97e-4 -0.006277 6.97e-4 -0.009068 6.98e-4 -12.14-9.8403-21.982-21.982-21.982-8.8651 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.2503 0-13.4 4.6519-15.672 11.128-0.3118-0.025809-0.62709-0.046735-0.94726-0.046735-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.48c6.1203 0 11.08-4.9609 11.08-11.08 6.98e-4 -6.1196-4.9595-11.079-11.079-11.079zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m47.348 58.436h8.0664l-4.6415 12.265h7.2928l-16.131 22.985 6.7766-18.353h-6.2249zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>
    `
    },
    {
        name: "Thunder shower (day)", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.24 28.982c-0.060687 0-0.11928 0.007673-0.17927 0.009068 0-0.00279 6.97e-4 -0.006277 6.97e-4 -0.009068 6.98e-4 -12.14-9.8403-21.982-21.982-21.982-8.8651 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.2503 0-13.4 4.6519-15.672 11.128-0.3118-0.025809-0.62709-0.046735-0.94726-0.046735-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.48c6.1203 0 11.08-4.9609 11.08-11.08 6.98e-4 -6.1196-4.9595-11.079-11.079-11.079zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m47.348 58.436h8.0664l-4.6415 12.265h7.2928l-16.131 22.985 6.7766-18.353h-6.2249zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>
    `
    },
    {
        name: "Thunder", icon: `
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m83.24 28.982c-0.060687 0-0.11928 0.007673-0.17927 0.009068 0-0.00279 6.97e-4 -0.006277 6.97e-4 -0.009068 6.98e-4 -12.14-9.8403-21.982-21.982-21.982-8.8651 0-16.486 5.2602-19.962 12.819-2.3117-1.22-4.9421-1.9182-7.7393-1.9182-7.2503 0-13.4 4.6519-15.672 11.128-0.3118-0.025809-0.62709-0.046735-0.94726-0.046735-6.1203 0-11.08 4.9602-11.08 11.08 0 6.1189 4.9602 11.08 11.08 11.08h66.48c6.1203 0 11.08-4.9609 11.08-11.08 6.98e-4 -6.1196-4.9595-11.079-11.079-11.079zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
        <path transform="matrix(5.6 0 0 5.6 70 3.979e-14)" d="m47.348 58.436h8.0664l-4.6415 12.265h7.2928l-16.131 22.985 6.7766-18.353h-6.2249zm0 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
    </svg>
    `
    }
];
export const UKBounds = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "coordinates": [
            [
                [
                    -3.2574462890624987,
                    59.46182611411526
                ],
                [
                    -4.075927734374998,
                    58.68550369843774
                ],
                [
                    -6.344604492187497,
                    58.64265251657594
                ],
                [
                    -7.238165222837635,
                    58.39398521213329
                ],
                [
                    -7.701416015624999,
                    57.94984494826024
                ],
                [
                    -7.932128906249999,
                    57.124314084296195
                ],
                [
                    -7.4267578125,
                    56.30434864830831
                ],
                [
                    -6.52587890625,
                    55.96150096848812
                ],
                [
                    -7.03125,
                    55.56592203025787
                ],
                [
                    -7.643312871436706,
                    54.9373712752221
                ],
                [
                    -8.364204709108066,
                    54.363621860023464
                ],
                [
                    -7.38050292561617,
                    53.97352020109652
                ],
                [
                    -7.0297045705336885,
                    54.242766350737654
                ],
                [
                    -6.489228239274386,
                    53.78032221274259
                ],
                [
                    -5.463944142091039,
                    54.00383329032567
                ],
                [
                    -5.299784831140059,
                    54.46585558758618
                ],
                [
                    -4.9447897352893895,
                    53.96893049523715
                ],
                [
                    -4.234976461718987,
                    53.98591297884084
                ],
                [
                    -3.9660644531249982,
                    54.54657953840501
                ],
                [
                    -3.2189941406250133,
                    53.77468884583572
                ],
                [
                    -3.7353515625000138,
                    53.409531853086435
                ],
                [
                    -4.4601844720983,
                    53.5942888007068
                ],
                [
                    -4.911685959679028,
                    53.39750230404677
                ],
                [
                    -4.804220637536029,
                    53.043492170111
                ],
                [
                    -4.998779296875011,
                    52.83595824834849
                ],
                [
                    -4.328613281250009,
                    52.522905940278065
                ],
                [
                    -4.779052734375011,
                    52.22779941887071
                ],
                [
                    -5.62500000000001,
                    51.991645772197316
                ],
                [
                    -5.339355468750011,
                    51.426614497074794
                ],
                [
                    -4.669189453125009,
                    51.54291882237387
                ],
                [
                    -4.075927734375009,
                    51.406059404992725
                ],
                [
                    -5.152587890625009,
                    50.84757295365384
                ],
                [
                    -5.394287109375009,
                    50.478482715642045
                ],
                [
                    -5.921630859375011,
                    50.28933925329175
                ],
                [
                    -5.877685546875009,
                    49.96535590991306
                ],
                [
                    -5.537109375000009,
                    49.83798245308484
                ],
                [
                    -4.855957031250009,
                    49.96535590991306
                ],
                [
                    -4.669189453125009,
                    50.24720490139267
                ],
                [
                    -3.9001464843750093,
                    50.099440987634964
                ],
                [
                    -3.3837890625000093,
                    50.240178884797004
                ],
                [
                    -2.9973241604452974,
                    50.38395937819966
                ],
                [
                    -2.3609059197830535,
                    50.39351148574801
                ],
                [
                    -1.0676485767023425,
                    50.38095521048079
                ],
                [
                    -0.6152343750000029,
                    50.65294336725709
                ],
                [
                    0.6262207031249971,
                    50.7295015014743
                ],
                [
                    1.3354134866411294,
                    50.95501159470869
                ],
                [
                    1.8786621093750016,
                    51.358061573190895
                ],
                [
                    1.5522236239388598,
                    51.73313703741871
                ],
                [
                    1.9498762302434018,
                    52.06015256732746
                ],
                [
                    2.287825833450367,
                    52.410464374881954
                ],
                [
                    1.5000646884383855,
                    53.22309383267004
                ],
                [
                    0.7669616473406222,
                    53.380104111286755
                ],
                [
                    0.5813638550763756,
                    53.586762453713256
                ],
                [
                    -0.087890625,
                    54.41892996865827
                ],
                [
                    -0.8128927399008603,
                    54.96319795795848
                ],
                [
                    -1.3842773437499998,
                    55.51619215717891
                ],
                [
                    -1.7391216233007185,
                    55.983361459439486
                ],
                [
                    -2.1468386589782256,
                    56.23245078285931
                ],
                [
                    -1.5020748347139794,
                    56.848965024225535
                ],
                [
                    -1.4776611328124987,
                    57.621875380195405
                ],
                [
                    -1.9967057985371057,
                    57.89801657462063
                ],
                [
                    -3.0432128906249987,
                    57.94984494826024
                ],
                [
                    -2.197265625,
                    59.366793908532124
                ],
                [
                    -3.2574462890624987,
                    59.46182611411526
                ]
            ]
        ],
        "type": "Polygon"
    }
}

export const windDirections = {
    S: 0,
    SSW: 22.5,
    SW: 45,
    WSW: 67.5,
    W: 90,
    WNW: 112.5,
    NW: 135,
    NNW: 157.5,
    N: 180,
    SNNE: 202.5,
    NE: 225,
    ENE: 247.5,
    E: 270,
    EE: 292.5,
    SE: 315,
    SSE: 227.5
}

export const totalBounds = [
    [
        -39.65199428693296,
        40.13468702871995
    ],
    [
        35.011091650567096,
        64.12373160825427
    ]
]