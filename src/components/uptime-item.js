import React, { useMemo } from 'react';
import htmr from 'htmr';
import ReactTooltip from 'react-tooltip';
import UptimeBlock from './uptime-block';
import Link from './link';
import { formatDuration } from '../utils/helper';

const UptimeItem = (props) => {

  const SHOW_LINK = false;
  const COUNT_DAYS = 90;
  const { monitor } = props;
  
  const status = {
    ok: 'Normal',
    down: 'Down',
    unknow: 'Unknown'
  };

  const total = useMemo(() => {
    return monitor.total.times
      ? `In Last ${COUNT_DAYS} Days, Down ${monitor.total.times} Times，Total Down ${formatDuration(monitor.total.duration)}，Average Uptime ${monitor.average}%`
      : `In Last ${COUNT_DAYS} Days, Uptime is ${monitor.average}%`;
  }, [COUNT_DAYS, monitor]);

  const initial = useMemo(() => {
    return monitor.daily[monitor.daily.length - 1].date;
  }, [monitor]);

  return (
    <div className="item">
      <div className="meta">
        <div className="info">
          <span className="name">{htmr(monitor.name)}</span>
          {SHOW_LINK && <Link className="link" to={monitor.url} text={htmr(monitor.name)} />}
        </div>
        <div className={`status ${monitor.status}`}>{status[monitor.status]}</div>
      </div>
      <div className="timeline">
        {monitor.daily.map((value, index) => (
          <UptimeBlock key={index} data={value} />
        ))}
      </div>
      <ReactTooltip className="tooltip" place="top" type="dark" effect="solid" />
      <div className="foot">
        <span>Today</span>
        <span>{total}</span>
        <span>{initial.format('YYYY-MM-DD')}</span>
      </div>
    </div>
  );
}

export default UptimeItem;
