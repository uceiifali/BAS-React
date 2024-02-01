export const Services = [
  {
    Name: "تصاميم",
    img: "/design.png",
    backCard:
      "تزويد عملائنا بأحدث التصاميم العصرية والافكار المبتكرة ذو الجودة العالية  ",
  },
  {
    Name: "دراسات",
    img: "/studies.png",
    backCard:
      "لتقديم لعملائنا جميع الدراسات اللازمة لاستكمال المشروع من خلال فريق مختص بالتنسيق مع جميع التخصصات",
  },
  {
    Name: "الخدمات المساحية",
    img: "/services.png",
    backCard: "توفير جميع اعمال المساحة بأحدث التقنيات والاجهزة العالمية  ",
  },
  {
    Name: "استشارات",
    img: "/consultant.png",
    backCard:
      "تقديم استشارات هندسية لتلبية كافة احتياجات عملائنا لتحقيق اقصى استفاده ممكنه  ",
  },
  {
    Name: "أشراف على التنفيذ",
    img: "/review.png",
    backCard:
      "الاشراف على التنفيذ وإدارة المشاريع من خلال فريق متكامل ومختص لتنفيذ التصاميم حسب الجداول الزمنية طبقا للمواصفات والمقاييس",
  },
];

export const columns = [
  {
    name: "م",
    selector: (row) => row.id,
  },
  {
    name: " اسم العميل",
    selector: (row) => row.clientName,
  },
  {
    name: " رقم الجوال  ",
    selector: (row) => row.PhoneNumber,
  },
  {
    name: "   نوع العميل ",
    selector: (row) => row.ClientType,
  },
  {
    name: " البريد اللاكترونى  ",
    selector: (row) => row.email,
  },

  {
    name: "الحالة",
    selector: (row) => row.status,
  },
];
