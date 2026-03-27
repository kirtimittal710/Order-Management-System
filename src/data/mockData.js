export const orders = [
  {
    id: "ORD-2024-001",
    customer: { name: "Arjun Sharma", email: "arjun@example.com", phone: "+91 98765 43210", avatar: "AS" },
    product: "Enterprise License Pack",
    amount: 84500,
    status: "in_progress",
    priority: "high",
    date: "2024-03-20",
    dueDate: "2024-03-27",
    assignedTo: "Priya Mehta",
    notes: "Client requested expedited delivery. VIP customer.",
    items: [{ name: "Enterprise License", qty: 5, price: 15000 }, { name: "Support Pack", qty: 1, price: 9500 }],
    timeline: [
      { status: "Order Placed", time: "Mar 20, 09:00", done: true },
      { status: "Payment Verified", time: "Mar 20, 10:30", done: true },
      { status: "Processing", time: "Mar 21, 14:00", done: true },
      { status: "Shipped", time: "Mar 24, 11:00", done: false },
      { status: "Delivered", time: "Mar 27, 18:00", done: false },
    ]
  },
  {
    id: "ORD-2024-002",
    customer: { name: "Sneha Patel", email: "sneha@example.com", phone: "+91 87654 32109", avatar: "SP" },
    product: "Starter Bundle",
    amount: 12999,
    status: "pending",
    priority: "medium",
    date: "2024-03-22",
    dueDate: "2024-03-29",
    assignedTo: "Rahul Singh",
    notes: "Standard order. No special requirements.",
    items: [{ name: "Starter License", qty: 1, price: 9999 }, { name: "Onboarding", qty: 1, price: 3000 }],
    timeline: [
      { status: "Order Placed", time: "Mar 22, 11:00", done: true },
      { status: "Payment Verified", time: "Mar 22, 12:00", done: true },
      { status: "Processing", time: "", done: false },
      { status: "Shipped", time: "", done: false },
      { status: "Delivered", time: "", done: false },
    ]
  },
  {
    id: "ORD-2024-003",
    customer: { name: "Vikram Nair", email: "vikram@example.com", phone: "+91 76543 21098", avatar: "VN" },
    product: "Pro Annual Subscription",
    amount: 45000,
    status: "completed",
    priority: "low",
    date: "2024-03-15",
    dueDate: "2024-03-22",
    assignedTo: "Ananya Das",
    notes: "Renewed from last year. Auto-renewal enabled.",
    items: [{ name: "Pro License Annual", qty: 3, price: 15000 }],
    timeline: [
      { status: "Order Placed", time: "Mar 15, 09:00", done: true },
      { status: "Payment Verified", time: "Mar 15, 09:30", done: true },
      { status: "Processing", time: "Mar 16, 10:00", done: true },
      { status: "Shipped", time: "Mar 19, 14:00", done: true },
      { status: "Delivered", time: "Mar 22, 12:00", done: true },
    ]
  },
  {
    id: "ORD-2024-004",
    customer: { name: "Kavya Reddy", email: "kavya@example.com", phone: "+91 65432 10987", avatar: "KR" },
    product: "Team Plan Monthly",
    amount: 8999,
    status: "cancelled",
    priority: "high",
    date: "2024-03-18",
    dueDate: "2024-03-25",
    assignedTo: "Priya Mehta",
    notes: "Client cancelled due to budget constraints. Refund processed.",
    items: [{ name: "Team Plan", qty: 1, price: 8999 }],
    timeline: [
      { status: "Order Placed", time: "Mar 18, 15:00", done: true },
      { status: "Payment Verified", time: "Mar 18, 15:30", done: true },
      { status: "Cancelled", time: "Mar 19, 10:00", done: true },
      { status: "Refund Initiated", time: "Mar 19, 11:00", done: true },
      { status: "Refund Completed", time: "Mar 21, 09:00", done: true },
    ]
  },
  {
    id: "ORD-2024-005",
    customer: { name: "Rohan Gupta", email: "rohan@example.com", phone: "+91 54321 09876", avatar: "RG" },
    product: "Custom Integration",
    amount: 125000,
    status: "in_progress",
    priority: "high",
    date: "2024-03-19",
    dueDate: "2024-04-02",
    assignedTo: "Rahul Singh",
    notes: "Custom API integration required. Technical team involved.",
    items: [{ name: "Custom Dev Hours", qty: 50, price: 2000 }, { name: "Integration License", qty: 1, price: 25000 }],
    timeline: [
      { status: "Order Placed", time: "Mar 19, 10:00", done: true },
      { status: "Payment Verified", time: "Mar 19, 11:00", done: true },
      { status: "Processing", time: "Mar 20, 09:00", done: true },
      { status: "In Development", time: "Mar 21, 09:00", done: false },
      { status: "Delivered", time: "Apr 02, 18:00", done: false },
    ]
  },
  {
    id: "ORD-2024-006",
    customer: { name: "Meera Joshi", email: "meera@example.com", phone: "+91 43210 98765", avatar: "MJ" },
    product: "Basic Plan",
    amount: 4999,
    status: "pending",
    priority: "low",
    date: "2024-03-24",
    dueDate: "2024-03-31",
    assignedTo: "Ananya Das",
    notes: "New customer. First purchase.",
    items: [{ name: "Basic License", qty: 1, price: 4999 }],
    timeline: [
      { status: "Order Placed", time: "Mar 24, 14:00", done: true },
      { status: "Payment Verified", time: "Mar 24, 14:30", done: false },
      { status: "Processing", time: "", done: false },
      { status: "Shipped", time: "", done: false },
      { status: "Delivered", time: "", done: false },
    ]
  },
];

export const notifications = [
  { id: 1, type: "status_change", message: "Order ORD-2024-001 moved to In Progress", time: "2 min ago", read: false, orderId: "ORD-2024-001" },
  { id: 2, type: "alert", message: "High priority order ORD-2024-005 is due in 3 days", time: "1 hr ago", read: false, orderId: "ORD-2024-005" },
  { id: 3, type: "update", message: "ORD-2024-003 has been delivered successfully", time: "3 hrs ago", read: true, orderId: "ORD-2024-003" },
  { id: 4, type: "alert", message: "ORD-2024-004 was cancelled. Refund processed.", time: "5 hrs ago", read: true, orderId: "ORD-2024-004" },
  { id: 5, type: "status_change", message: "New order ORD-2024-006 received from Meera Joshi", time: "Yesterday", read: true, orderId: "ORD-2024-006" },
  { id: 6, type: "update", message: "Payment verified for ORD-2024-002", time: "Yesterday", read: true, orderId: "ORD-2024-002" },
];

export const teamMembers = ["Priya Mehta", "Rahul Singh", "Ananya Das", "Karan Kumar", "Divya Shah"];

export const stats = {
  total: 6,
  pending: 2,
  inProgress: 2,
  completed: 1,
  cancelled: 1,
  revenue: 281497,
  monthlyData: [
    { month: "Oct", orders: 18, revenue: 180000 },
    { month: "Nov", orders: 24, revenue: 240000 },
    { month: "Dec", orders: 30, revenue: 320000 },
    { month: "Jan", orders: 22, revenue: 210000 },
    { month: "Feb", orders: 28, revenue: 290000 },
    { month: "Mar", orders: 6, revenue: 281497 },
  ]
};
