var pageInfo = {
  "serviceBox": [
    "品牌&视觉一站式设计服务商",
    "品牌&视觉一站式设计服务商",
    "品牌&视觉一站式设计服务商",
    "品牌&视觉一站式设计服务商",
  ],

  "process": [
    {
      "stage": "STAGE 1",
      "work": "前期沟通",
      "info": [
        "项目洽谈 > 项目建议 > 项目规划 > 合同签订",
        "了解客户需求、分析需求并提供项目建议、提供整体时间规划、相关预算及报价、签订合同、收取定金"
      ]
    },
    {
      "stage": "STAGE 2",
      "work": "创意阶段",
      "info": [
        "创意策划 > 设计执行 > 阶段提案 > 设计定稿",
        "总结核心诉求、创意策划、初稿设计执行、初稿方案提案、总结反馈调整细化、再次提案、终稿定稿"
      ]
    },
    {
      "stage": "STAGE 3",
      "work": "落地上线",
      "info": [
        "相关制作及执行 > 验收确认 > 项目结案 > 维护",
        "文件整理、尺寸工艺精细化、项目后端跟进及输出品质管控、客户确认验收、结算尾款、提供项目所有文件及产物、长尾维护及服务"
      ]
    }
  ]
  
}

// js原生编程
var services = '', process = ''
for(var i = 0; i < pageInfo.service.length; i++) {
  services += '<div>' + pageInfo.service[i] + '</div>'
}
document.getElementById('serviceBox').innerHTML = services

for(var i = 0; i < pageInfo.process.length; i++) {
  process += '<div class="process-card animate-block">'
  process += '<div class="process-card-stage">' + pageInfo.process[i].stage + '</div>'
  process += '<div class="process-card-work">' + pageInfo.process[i].work + '</div>'
  process += '<div class="process-card-info">'
  if(pageInfo.process[i].info) {
    for(var j = 0; j < pageInfo.process[i].info.length; j++) {
      process += '<p>' + pageInfo.process[i].info[j] + '</p>'
    }
    process += '</div>'
  }
  process += '</div>'
}
document.getElementById('process').innerHTML = process
