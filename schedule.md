---
layout: page
title: Schedule
---

<div id="calendar"></div>

<link rel='stylesheet' href='{{ site.baseurl }}/css/fullcalendar.min.css' />
<style>
  #calendar {
    margin-top: 40px;
  }
  table {
    margin: 0;
  }
  .fc-content {
    font-size: 0.85em;
  }
  .fc-event[href]:hover {
    filter: brightness(130%);
  }
</style>
<script src='{{ site.baseurl }}/js/moment.min.js'></script>
<script src='{{ site.baseurl }}/js/fullcalendar.min.js'></script>
<script src='{{ site.baseurl }}/js/schedule.js'></script>