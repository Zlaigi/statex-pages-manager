interface ITableData{
  avatar: string
  name: string
  job: string
  amount: number
  status: "success" | "danger" | "warning" | "neutral" | "primary" | undefined
  date: string
}


const tableData: ITableData[] =  [
  {
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
    name: 'Chandler Jacobi',
    job: 'Direct Security Executive',
    amount: 989.4,
    status: 'primary',
    date: 'Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    name: 'Monserrat Marquardt',
    job: 'Forward Accountability Producer',
    amount: 471.44,
    status: 'danger',
    date: 'Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
    name: 'Lonie Wyman',
    job: 'Legacy Program Director',
    amount: 934.24,
    status: 'success',
    date: 'Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    name: 'Corine Abernathy',
    job: 'Chief Factors Planner',
    amount: 351.28,
    status: 'warning',
    date: 'Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
    name: 'Lorenz Botsford',
    job: 'Central Accountability Developer',
    amount: 355.3,
    status: 'neutral',
    date: 'Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    name: 'Everette Botsford',
    job: 'Product Group Architect',
    amount: 525.42,
    status: 'success',
    date: 'Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    name: 'Marilou Beahan',
    job: 'Future Security Planner',
    amount: 414.99,
    status: 'success',
    date: 'Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)',
  },
]

export default tableData
export type {
  ITableData
}
