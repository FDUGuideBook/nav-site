---
# 工具页 frontmatter

# 这里先定义一个简单的链接列表，后续可按需扩展为多组

links:
  - text: 空教室查询
    link: http://10.64.130.6/?b=H3#H32
    desc: 查询校内空余教室使用情况
  - text: 讲座查询
    link: https://3108.fudan.edu.cn/iLecture/0/-/-/-
    desc: 查看复旦各类讲座与活动安排
  - text: 在线 VPN
    link: https://webvpn.fudan.edu.cn/login
    desc: 校外访问校内资源的统一 VPN 入口
  - text: 正版软件
    link: https://its.fudan.edu.cn/软件正版化
    desc: 学校提供的正版软件获取与使用说明
  - text: 复旦慕课
    link: https://fudan.mooc.chaoxing.com/portal
    desc: 复旦课程在超星慕课平台上的集中入口
  - text: PnP 申请
    link: https://fdjwgl.fudan.edu.cn/student/home
    desc: PnP 旁听/跨校选课等相关申请入口
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 工具

常用校内工具与服务入口汇总。

<LinkList :links="$frontmatter.links" />
