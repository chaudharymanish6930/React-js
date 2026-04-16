import React from "react";
import "./index.css";
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
    {/* <Card/>
    <Card/>
    <Card/> */}
    <Card user='Rohit' age={12} img="https://imgs.search.brave.com/EwBGiV-LMDy8I3RSOr0qLWBdnlt4ZuqGlExUc_znmyw/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9mZWVk/cy5hYnBsaXZlLmNv/bS9vbmVjbXMvaW1h/Z2VzL3VwbG9hZGVk/LWltYWdlcy8yMDI1/LzA1LzA2Lzk1ZTIz/YWNiN2Q2ZDQ1Mjk1/NDViYzBjOGVlYzAx/ZjU4MTc0NjUzODgw/ODEyOTkwMV9vcmln/aW5hbC5qcGc_aW1w/b2xpY3k9YWJwX2Nk/biZpbXdpZHRoPTIw/MA" />
    <Card user="Manish" age={24} img="https://imgs.search.brave.com/03qoRkwERUATVTdIpRIzOzrVysA5wuIhT_-OW8RR0ZE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9mZWVk/cy5hYnBsaXZlLmNv/bS9vbmVjbXMvaW1h/Z2VzL3VwbG9hZGVk/LWltYWdlcy8yMDI1/LzA1LzE5LzViNTBh/Y2ZjYWE0NzJlNjU3/Zjk0Y2YyNWM4YWNi/ZWY0OTBiNzUuanBn/P2ltcG9saWN5PWFi/cF9jZG4maW13aWR0/aD0yMDA" />
    <Card user="Manish" age={24} img="https://imgs.search.brave.com/03qoRkwERUATVTdIpRIzOzrVysA5wuIhT_-OW8RR0ZE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9mZWVk/cy5hYnBsaXZlLmNv/bS9vbmVjbXMvaW1h/Z2VzL3VwbG9hZGVk/LWltYWdlcy8yMDI1/LzA1LzE5LzViNTBh/Y2ZjYWE0NzJlNjU3/Zjk0Y2YyNWM4YWNi/ZWY0OTBiNzUuanBn/P2ltcG9saWN5PWFi/cF9jZG4maW13aWR0/aD0yMDA" />
    </div>
  );
};

export default App;