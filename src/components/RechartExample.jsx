const convertDate = (timestamp) =>
  moment(new Date(timestamp * 1000)).format("MMM YY'");
const convertValue = (value) => `${Math.floor(value / 10e2)}M`;

const {
  Line,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} = Recharts;

const SimpleChart = React.createClass({
  getInitialState() {
    return {
      data: []
    };
  },
  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=50&aggregate=3&e=Kraken"
      )
      .then((res) => {
        this.setState({ data: res.data["Data"] });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  render() {
    return (
      <ComposedChart
        width={800}
        height={300}
        data={this.state.data}
        margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <filter id="shadow" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur" />
            <feOffset in="blur" dx="0" dy="7" result="offsetBlur" />
            <feFlood
              floodColor="#006991"
              floodOpacity="0.5"
              result="offsetColor"
            />
            <feComposite
              in="offsetColor"
              in2="offsetBlur"
              operator="in"
              result="offsetBlur"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <XAxis dataKey="time" tickFormatter={convertDate} />
        <YAxis tickFormatter={convertValue} />
        <Tooltip />
        <CartesianGrid vertical={false} stroke="#DDD" />

        <Line
          type="monotone"
          unit="M"
          strokeLinecap="round"
          strokeWidth={2}
          filter="url(#shadow)"
          style={{ strokeDasharray: `0 60% 40%` }}
          dataKey="close"
          stroke="#129a74"
          dot={false}
          legendType="none"
        />
      </ComposedChart>
    );
  }
});

const CoinList = React.createClass({
  getInitialState() {
    return {
      data: []
    };
  },
  componentDidMount() {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((res) => {
        this.setState({ data: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  render() {
    return (
      <div>
        <h1>CoinList</h1>
        <ul>
          {this.state.data.map((coin, index) => (
            <li key={coin.rank}>{coin.id}</li>
          ))}
        </ul>
      </div>
    );
  }
});

const App = React.createClass({
  render() {
    return (
      <div>
        <SimpleChart />
      </div>
    );
  }
});
