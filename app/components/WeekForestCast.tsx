interface WeekForecastProps{
    data:{
        current:{
            condition:{
                icon: string;
                text: string;
            };
            temp_c: number;
        };
        location:{
            name: string;
            country: string;
        };
    };}

const WeekForestCast = ({data}: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
        {data.forecast.forecastday.map((day,index)=>(
            <div key={index} className=" bg-white/40 p-2 text-center rounded-lg flex flex-col items-center">
            <p>{new Date(day.date).toLocaleString("en-US", {weekday: "short"})}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div> 
                <p> H {day.day.maxtemp_c}°</p>
                <p> L {day.day.mintemp_c}°</p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default WeekForestCast