<template>
  <div id="skill">
      <canvas id="myChart"></canvas>
  </div>
  <div class="skilldetail" id="skilldetail">
    <div class="detail">
        <h2>SKILL DETAIL</h2>
    </div>
    <div class="detail"> 
        Back-End : .NET (Framework and Core) MVC C# , Golang , 
    </div>
    <div class="detail"> 
        Front-End : Vue , Javascript , JQUERY
    </div>
    <div class="detail"> 
        Database : SQL Server
    </div>
    <div class="detail"> 
        Methodology : Agile , SOLID Principle , OOP , Clean Architecture, 
    </div>
    <div class="detail"> 
        Testing : NUnit , MOQ , Test Piramid
    </div>
    <div class="detail"> 
        Others : GIT , Docker
    </div>
</div>
</template>

<script>
import Chart  from 'chart.js'

export default {
  name: "skill",
  mounted() {
    let ctx = document.getElementById("myChart");
    // @ts-ignore
    new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Specilized","ProblemSovling","Library","Methodology","Tools"],
        datasets: [
        {
          label: "Back-End",
          data: [80, 80, 90, 90, 70],
          backgroundColor: 'rgba(217,236,251,0.8)',
          borderColor: 'rgba(54,162,235,1)'
        },
        {
          label: "Front-End",
          data: [40, 50, 60, 30, 40],
          backgroundColor: 'rgba(255,225,230,0.8)',
          borderColor: 'rgba(255,100,132,1)'
        },
        {
          label: "Database",
          data: [80, 60, 30, 40, 40],
          backgroundColor: 'rgba(167,255,131,0.8)',
          borderColor: 'rgba(23,185,119,1)'
        },
        {
          label: "Testing",
          data: [60, 60, 40, 70, 40],
          backgroundColor: 'rgba(255,243,227,0.8)',
          borderColor: 'rgba(255,158,104,1)'
        }
        ],
      },
      options: 
      {
        
      }
    });
  },
};
</script>

<style>

#skill {
  width: 50%;
  padding-left: 25%;
}
.skill_detail {
  width:50%;
  height:50%;
}

.detail {
    padding-left: 30%;
    padding-bottom: 5px;
    text-align: left;
}

</style>