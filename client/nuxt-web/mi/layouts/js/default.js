export default {
  data() {
    return {
      isDev: process.env.APP_ENV === 'local',
      isDemo:true
    }
  },
  created() {
  },
  mounted() {
      this.isDemo = this.handlePath()
  },
  methods: {
    handlePath() {
      let url = $nuxt.$route.path;  
      let str = url.indexOf('ecdemo') !==-1 
      return str
    }
  },
}