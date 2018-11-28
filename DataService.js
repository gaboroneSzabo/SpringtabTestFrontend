export default class DataService {

    chartData = [
        { name: 'Mon', Visits: 2200, Orders: 3400 },
        { name: 'Tue', Visits: 1280, Orders: 2398 },
        { name: 'Wed', Visits: 5000, Orders: 4300 },
        { name: 'Thu', Visits: 4780, Orders: 2908 },
        { name: 'Fri', Visits: 5890, Orders: 4800 },
        { name: 'Sat', Visits: 4390, Orders: 3800 },
        { name: 'Sun', Visits: 4490, Orders: 10000 },
      ];

      id;

      createData = (name, calories, fat, carbs, protein) => {
        this.id += 1;
        const id = this.id;
        return { id, name, calories, fat, carbs, protein };
      }
      
      tableData = [
        this.createData('Frozen yoghurt', 1590, 6.0, 24, 4.0),
        this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        this.createData('Eclair', 262, 16.0, 24, 6.0),
        this.createData('Cupcake', 305, 3.7, 67, 4.3),
        this.createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

      getChartData = () => {
          return this.chartData;
      }

      getTableData = () => {
          return this.tableData;
      }
}
