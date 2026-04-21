import { reactive } from 'vue';

// Reactive store — chia sẻ trạng thái toàn app
export const blog = reactive([
    {
        id: 1,
        title: 'Giới thiệu Vue Router',
        author: 'Nguyễn Thái Giả Hủ',
        date: '2026-04-01',
        excerpt: 'Vue Router là thư viện định tuyến chính thức của Vue.js, giúp xây dựng ứng dụng SPA.',
        content: 'Vue Router là thư viện định tuyến chính thức của Vue.js. Nó tích hợp sâu với Vue.js để giúp xây dựng các ứng dụng Single Page Application (SPA) một cách dễ dàng. Với Vue Router, bạn có thể định nghĩa các routes, sử dụng nested routes, route guards và nhiều tính năng mạnh mẽ khác.',
    },
    {
        id: 2,
        title: 'Nested Routes trong Vue Router',
        author: 'Nguyễn Thái Giả Hủ',
        date: '2026-04-05',
        excerpt: 'Nested routes cho phép bạn tạo cấu trúc phân cấp cho các route trong ứng dụng Vue.',
        content: 'Nested routes (routes lồng nhau) là một tính năng mạnh của Vue Router cho phép bạn tạo cấu trúc phân cấp cho các route. Bằng cách khai báo children trong một route, component cha sẽ render component con thông qua <RouterView /> bên trong nó. Điều này giúp xây dựng layout phức tạp một cách có tổ chức.',
    },
    {
        id: 3,
        title: 'Route Guards và Xác thực',
        author: 'Nguyễn Thái Giả Hủ',
        date: '2026-04-10',
        excerpt: 'Route guards giúp bảo vệ các trang yêu cầu đăng nhập trong ứng dụng Vue.',
        content: 'Route guards trong Vue Router cho phép bạn kiểm soát việc điều hướng. Bạn có thể sử dụng beforeEach để chặn người dùng chưa đăng nhập truy cập vào các trang được bảo vệ. Kết hợp với meta fields như requiresAuth, bạn có thể xây dựng hệ thống xác thực hoàn chỉnh cho ứng dụng của mình.',
    },
]);

