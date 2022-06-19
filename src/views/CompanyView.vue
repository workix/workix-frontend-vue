<template>
  <div id="">      

		<!-- ============ TITLE START ============ -->
		<section id="title" v-if="companyId != null || companyId > 0">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<img :src="`${baseUrl}/resources/placeholder/332x120.gif`" class="img-responsive" alt="" />
					</div>
				</div>
			</div>
		</section>
		<!-- ============ TITLE END ============ -->

		<section v-else>
			<h1> Company Id is not Defined</h1>
		</section>	

        <!-- ============ CONTENT START ============ -->
		<section id="jobs" v-if="companyId != null && companyId > 0 && company != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">
						<article>
							<h2>Sobre {{company.name}}</h2>
							<p>{{company.description}}</p>
							
							<hr>
							<h2>Localização</h2>							

							<div id="map-canvas"></div>

							<hr>
							<h2>Vagas</h2>

							<div class="jobs">
								
								<!-- Job offer -->
								<template v-for="(j,i) in jobs" :key="i">
								<a :href="`/vagas?id=${j.id}`">
									<div class="featured"></div>
									<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle" />
									<div class="title">
										<h5>{{j.title}}</h5>
										<p>{{j.company.name}}</p>
									</div>
									<div class="data">
										<span class="city"><i class="fa fa-map-marker"></i> {{j.company.locale.city}}</span>
										<span class="type full-time"><i class="fa fa-clock-o"></i> {{j.jobType}}</span>
										<span class="sallary"><i class="fa fa-dollar"></i> R$ {{j.maxPayment.toFixed(2)}}</span>
									</div>
								</a>	
								</template>							

							</div>

						</article>
					</div>
					<div class="col-sm-4" id="sidebar">
						<div class="sidebar-widget" id="share">
							<h2>Redes Sociais</h2>
							<ul v-if="company.medias.length == 0">
								<li><a href="https://www.facebook.com/sharer/sharer.php?u=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-facebook"></i></a></li>
								<li><a href="https://twitter.com/home?status=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-twitter"></i></a></li>
								<li><a href="https://plus.google.com/share?url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html&amp;title=Jobseek%20-%20Job%20Board%20Responsive%20HTML%20Template&amp;summary=&amp;source="><i class="fa fa-linkedin"></i></a></li>
							</ul>
							<ul v-else>
								<template v-for="(m,i) in company.medias" :key="i">
								<li><a :href="m.url"><i :class="getClass(m.media)"></i></a></li>
								</template>
							</ul>
						</div>
						<hr>
						<div class="sidebar-widget" id="widget-contact">
							<h2>Contato</h2>
							<ul>
								<li><i class="fa fa-building"></i>{{company.segment}}</li>
								<li><i class="fa fa-map-marker"></i>{{company.locale.street}}</li>
								<li><i class="fa"></i>{{company.locale.city}}, {{company.locale.zipCode}} {{company.locale.estate}}</li>
								<li><i class="fa fa-phone"></i>{{company.contact.mobilePhone}}</li>
								<li><i class="fa fa-envelope"></i><a :href="`mailto:${company.user.email}`">Enviar Email</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ============ CONTENT END ============ -->

        <ContactsWrapper />                
  </div>
</template>

<script>
import ContactsWrapper from "@/components/ContactsWrapper.vue"
export default {
    components:{        
        ContactsWrapper        
    },
	data(){
		return{
			baseUrl: window.location.origin,
			companyId: 0,
			company: null,
			jobs: []
		}
	},
    methods: {
        initialize(google) {
        //-----------------------------------------------------------------------
        // Create an array of styles.
        
        var styles = [
            {
            "stylers": [
                { "saturation": -100 },
                { "gamma": 1 }
            ]
            },{
                "featureType": "water",
                "stylers": [
                    { "lightness": -12 }
                ]
            }
        ];

        //-----------------------------------------------------------------------
        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        
        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });

        //-----------------------------------------------------------------------
        // Set up map pin position
        
        var latlng = new google.maps.LatLng(40.742284, -73.987866);

        //-----------------------------------------------------------------------
        // Set up map options

        var myOptions =
        {
            scrollwheel: false,
            zoom: 13,
            center: latlng,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
        };

        //-----------------------------------------------------------------------
        // Set up map ID's

        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

        //-----------------------------------------------------------------------
        // Associate the styled map with the MapTypeId and set it to display.

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        //-----------------------------------------------------------------------
        // Setup up map pin image

        var image = {
            // Path to your map pin image
            url: 'images/map-marker.png',
            // This marker is 40 pixels wide by 42 pixels tall.
            size: new google.maps.Size(40, 42),
            // The origin for this image is 0,0.
            origin: new google.maps.Point(0,0),
            // The anchor for this image is the base of the pin at 20,42.
            anchor: new google.maps.Point(20, 42)
        };

        //-----------------------------------------------------------------------
        // Add marker

        var myMarker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: image,
            clickable: true,
            title:"Netvibes Inc."
        });

        myMarker.info = new google.maps.InfoWindow({
            content: "<b>Netvibes Inc.</b><br>2 Madison Avenue<br>New York City, 29478 USA"
        });

        google.maps.event.addListener(myMarker, 'click', function() {
            myMarker.info.open(map, myMarker);
        });

		google.maps.event.addDomListener(window, 'load', this.initialize);
    },
		getCompany() {
			return this.$http.get(`http://localhost:8080/workix/services/v1/companies/${this.companyId}`)
		},
		getJobsFromCompany(){
			return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/company/${this.companyId}`)
		},
		getClass(media){
			switch (media) {
				case "Facebook":					
					return "fa fa-facebook"
				case "Twitter":
					return "fa fa-twitter"		
				case "Linkedin":
					return "fa fa-linkedin"
				case "instagram":
					return "fa fa-instagram"	
				case "GitHub":
					return "fa fa-github"
				default:
					break;
			}
		}
    },
	async created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);

	this.companyId = this.$route.query.id
	const {data} = await this.getCompany()
	this.company = data
	const resp = await this.getJobsFromCompany()
	this.jobs = resp.data
  }
}
</script>

<style>
 .jobs a {
    display: inline-flex;
    margin: 10px;
}
.jobs a .title{
    margin: 10px;
}
.jobs a .data span{
    margin: 10px;
}
</style>