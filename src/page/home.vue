<template>
  <div class="home">
    <div class="home_top">
    	<div class="top_left">
    		<img src="../assets/logo.png" alt="" width="80" height="80">
    	</div>
    	<div class="top_center">
    		<span class="center_btn btn_active">消息</span>
    		<span class="center_btn">电话</span>
    	</div>
    	<div class="top_right">+</div>
    </div>
    <div class="home_search">
    	<div class="search_btn">搜索</div>
    </div>
	<ul class="home_list">
		<li v-for="item in list">
			<img src="../assets/logo.png" alt="" width="120" height="120">
			<div>
				<p class="list_name">{{item.name}}</p>
				<p class="list_content">{{item.content}}</p>
			</div>
			<div class="time">{{item.time}}</div>
		</li>
	</ul>
	<navbar></navbar>
  </div>
</template>

<script>
import navbar from '../components/nav.vue'
export default {
  data () {
    return {
      list: [{name:'张飞',content:'你好啊！',time:'15:20'},{name:'关羽',content:'你好啊的！',time:'15:26'},{name:'刘备',content:'你好啊单独的！',time:'15:55'}]
    }
  },
  components: {
  	navbar
  }
}
</script>

<style>
	.home {
		font-size: 3rem;
	}
	.home_top {
		display: flex;
		justify-content: space-around;
		padding-top: 2rem;
		padding-bottom: 2rem;
		background: #3C8DC4;
		color:white;
	}
	.top_left img {
		border-radius: 50%;
		margin-top: 0.5rem;
	}
	.top_center {
		background: white;
	}
	.center_btn {
		display: inline-block;
		padding:5px 25px;
		border:1px solid ;
		height: 89%;
		background-color: #3C8DC4;
	}
	.btn_active {
		background: white;
		color:blue;
		border:none;
	}
	.home_search {
		margin-top: 1rem;
		text-align: center;
		width: 100%;
	}
	.search_btn {
		width: 90%;
		margin: 0 auto;
		background: #E5F0F7;
	}
	.home_list li {
		display: flex;
		padding:2rem 0;
		text-indent: 2rem;
		border-bottom: 1px solid gray;
		position: relative;
	}
	.home_list img {
		border-radius: 50%;
		margin-left: 2rem;
	}
	.list_content {
		font-size: 2rem;
	}
	.time {
		position: absolute;
		right: 3rem;
		font-size: 2rem;
		top:3rem;
	}
</style>