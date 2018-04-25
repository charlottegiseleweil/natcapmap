
// http://leaflet-extras.github.io/leaflet-providers/preview/

// define basemaps
var ESRIImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, and UPR-EGP'});

var ESRIOcean = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, GEBCO, NOAA, and DeLorme'
});

// set base map and controls
var map = new L.Map('map', {
  zoomControl: true,
  layer_selector: true,
  layers: [ESRIOcean],
  center: [25, 8],
  zoom: 2,
  minZoom: 1,
  maxZoom: 12
});

map.scrollWheelZoom.disable();

// scale
L.control.scale({ position: 'bottomleft' }).addTo(map);
//map.scrollWheelZoom.disable();

var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML +=
        '<img src="img/Legend.png" width="450" height="110">';
    return div;
    };
    legend.addTo(map);

// add basemap and overlays
var baseMaps = {
	"imagery": ESRIImagery,
	"terrain": ESRIOcean,
};


L.control.layers(baseMaps, greenIcon, {collapsed: false}).addTo(map);	
	

// extend the default marker class
 var greenIcon = L.Icon.Default.extend({
	options: {
			iconUrl: 'img/marker-icon-green.png' ,
			iconSize:     [28.215, 28.9575], // size of the icon
			iconAnchor:   [10, 20],
	}
 });


 var blackIcon = L.Icon.Default.extend({
	options: {
			iconUrl: 'img/marker-icon-black.png' ,
			iconSize:     [28.215, 28.9575], // size of the icon
			iconAnchor:   [10, 20],
	}
 });


 var blueIcon = L.Icon.Default.extend({
	options: {
			iconUrl: 'img/marker-icon-blue.png' ,
			iconSize:     [28.215, 28.9575], // size of the icon
			iconAnchor:   [10, 20],
	}
 });

  var redIcon = L.Icon.Default.extend({
	options: {
			iconUrl: 'img/marker-icon-red.png' ,
			iconSize:     [28.215, 28.9575], // size of the icon\
			iconAnchor:   [10, 20],
	}
 });

 var pinkIcon = L.Icon.Default.extend({
	options: {
			iconUrl: 'img/marker-icon-pink.png' ,
			iconSize:     [28.215, 28.9575], // size of the icon
			iconAnchor:   [10, 20],
	}
 });

 var orangeIcon = L.Icon.Default.extend({
	options: {
			iconUrl: 'img/marker-icon-orange.png' ,
			iconSize:     [28.215, 28.9575], // size of the icon
			iconAnchor:   [10, 20],
	}
 });


 var blackIcon = new blackIcon(); 
  blackIcon.options.shadowSize = [0,0];
 var blueIcon = new blueIcon();
  blueIcon.options.shadowSize = [0,0];
 var pinkIcon = new pinkIcon(); 
  pinkIcon.options.shadowSize = [0,0];
 var orangeIcon = new orangeIcon(); 
  orangeIcon.options.shadowSize = [0,0];
 var greenIcon = new greenIcon();
 greenIcon.options.shadowSize = [0,0];

//////////////////////////////////////////
// SUSTAINABLE, LIVABLE CITIES ///////////
//////////////////////////////////////////
L.marker([44.9778, -93.2650], {icon: greenIcon}).addTo(map).bindPopup("<h1>Urban</h1>");	 

//////////////////////////////////////////
// SAFE, RESILIENT COASTAL COMM //////////
//////////////////////////////////////////	 
L.marker([0.4359506, -75.52766989999998], {icon: orangeIcon}).addTo(map).bindPopup("<h1>Climate Adaptation and Hazard Mitigation in Putumayo, Colombia</h1>Working with WWF to identify areas for compensation and rewards for ecosystem services, based on ecosystem service provision, biodiversity, and vulnerability to climate change. The regional environmental authority supports this compensation mechanism.");	 
L.marker([36.6002378, -121.89467609999997], {icon: orangeIcon}).addTo(map).bindPopup("<h1>Climate Adaptation and Hazard Mitigation along the California central coast</h1>Working with the Center for Ocean Solutions to include natural capital in climate adaptation planning in Monterey, Santa Cruz, Sonoma, and Marin Counties.");
L.marker([29.4719753, -94.76915859999997], {icon: orangeIcon}).addTo(map).bindPopup("<h1>Climate Adaptation and Hazard Mitigation in Galveston Bay, Texas</h1>Collaborating with the SSPEED Center at Rice University and The Nature Conservancy to understand the diverse services provided by marshes in Galveston Bay and to use that understanding to increase the resilience of the region in the face of coastal hazards.");
L.marker([28.9541368, -95.3596617], {icon: orangeIcon}).addTo(map).bindPopup("<h1>Climate Adaptation and Hazard Mitigation in Freeport, Texas</h1>Assisting the Dow Chemical/Nature Conservancy partnership to model coastal protection, recreation, and fisheries benefits provided by coastal habitats to inform decisions about grey and green infrastructure to protect Dow's facility.");
	 
//////////////////////////////////////////
// SUSTAIN DEVELOPMENT PLANNING //////////
//////////////////////////////////////////	 
L.marker([49.0, -125.8], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning on Vancouver Island</h1>Working with West Coast Aquatic, a public-private partnership, to use nature's benefits to inform coastal plans for Barkley and Clayoquot Sounds.");
L.marker([21.3069444, -157.85833330000003], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Hawaii</h1>Using information about variation in ecosystem services and their diverse values to develop land management plans that best meet the diverse objectives of Kamehameha Schools, the largest private land-owner in Hawai'i.");
L.marker([-0.589724, 101.34310579999999], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Sumatra</h1>Working with WWF to integrate natural capital valuation into spatial plans guiding development and conservation on the island of Sumatra, Indonesia.");
L.marker([38.9071923, -77.03687070000001 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Washington, D.C.</h1>Collaborating with the US Department of Defense (DoD) to develop tools and approaches to map and value ecosystem services in diverse ecosystems and military contexts of DoD installations.  Our work with DoD focused on Joint Base Lewis-McChord in Washington, Fort Pickett, Virginia, and Fort Benning, Georgia.");
L.marker([13.193887, -59.54319799999996 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Barbados</h1>Working with the Inter-American Development Bank, the consulting firm Downstream Strategies, and the Barbados Coastal Zone Management Unit to incorporate ecosystem services into coastal zone planning in Barbados.");
L.marker([24.7063805, -78.0195387 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Andros Island, The Bahamas</h1>Working with the Government of The Bahamas, The Nature Conservancy, and the Inter-American Development Bank to develop a Master Plan for Andros Island that will promote sustainable development and ensure the long-term viability of forests, wetlands, reefs, and biodiversity that underpin the economy and support livelihoods.");
L.marker([-42.67666699999999, -73.993333 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Chiloé, Chile</h1>Helping the Center for Studies and Conservation of Natural Heritage use ecosystem service information to zone various activities to preserve natural and cultural heritage values on Chiloé island.");
L.marker([-18.665695, 35.52956199999994 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Mozambique</h1>Together with WWF, the government of Mozambique and other partners, helping to create a spatial plan for the Primeras et Segundas marine reserve, as well as to integrate natural capital in its national planning system and national accounts, highlighted as one of its strategic objectives in the country’s five year national development plan.");
L.marker([21.913965, 95.95622300000002 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Myanmar</h1>Working with WWF to inform development of a new road being planned in Myanmar, from Dawei to Thailand, and quantifying and mapping natural capital across the nation to support development and implementation of the country’s Green Economy strategy.");
L.marker([17.189877, -88.49765000000002], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Belize</h1>Working with the Belize Coastal Zone Management Authority and Institute, WWF and other partners to use ecosystem services to design the country’s first national integrated coastal zone management plan.");
L.marker([35.86166, 104.19539699999996], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in China</h1>Informing the designation of Ecosystem Function Conservation Areas (EFCAs) and the development of a Gross Ecosystem Product (to be reported alongside GDP) throughout China with the Chinese National Academy of Sciences.");
L.marker([19, 109.5 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning on Hainan Island, China</h1>Working with the Chinese Academy of Sciences to assess the regional planning implications of Ecosystem Function Conservation Area (EFCA) designations in Hainan, Island, a high value biodiversity and ecosystem service provision area, and also rich in rubber plantations critical for local livelihoods.");
L.marker([1.0682368, 114.23353610000004 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Kalimantan, Indonesia</h1>Together with WWF, informing spatial planning in Kalimantan at island and district levels, motivating the designation of the Heart of Borneo as a Strategic National Area to protect environmental values, and generating funding for management of the area.");
L.marker([47.6040016, -122.94878080000001], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Hood Canal, Washington</h1>Working with The Nature Conservancy in Washington to understand how activities in coastal watersheds might impact the delivery of ecosystem services from marine systems.  Linking land and sea.");
L.marker([12.7879427, 107.10119310000005], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Mondulkiri Province, Cambodia</h1>Working with WWF to integrate ecosystem service considerations into integrated spatial planning in Mondulkiri Province in Cambodia.");
L.marker([28.394857, 84.124008], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Nepal</h1>Working with WWF to use InVEST and RIOS to support Integrated River Basin Management in Nepal.");
L.marker([-12.5986, -70.09058399999998], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning in Madre de Dios in Peru</h1>Working with WWF to use ecosystem service information to support a land use planning process undertaken by the regional government in Madre de Dios in Peru.");
L.marker([5.6663374, -0.2522920000000113], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning</h1>Working with CGIAR’s Water, Land and Ecosystems Program and other partners to prioritize management interventions in the Volta Basin aimed at increasing agricultural yields and food security, accounting for ecosystem services’ contribution to nutrition through crop and fish production.");
L.marker([-1.5867894, 39.44241809999994], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning</h1>In collaboration with CIAT (International Center for Tropical Agriculture), TNC, IFPRI (International Food Policy Research Institute) and the Water, Land and Ecosystems Program of CGIAR, developing an approach for optimizing land use planning by accounting for trade-offs among food production and other ecosystem services. We are applying this approach first in the Upper Tana-Nairobi Water Fund area and will later extend it to the Cañete Basin in Peru and the Southern Agricultural Growth Corridor region of Tanzania.");
L.marker([41.5264977, -70.6730857], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning and Climate Adaptation and Hazard Mitigation in Woods Hole, MA</h1>Working with state, regional and Federal leaders in New England to (i) map and quantify risks to habitat and ecosystem services from various activities in the Northwest Atlantic; (ii) proactively incorporate visibility considerations into wind farms and other large infrastructure siting and development projects, and (iii) quantify the specific communities (people and ports) affected by changes in fishing patterns driven by climate and management.");
L.marker([46.729553, -94.68589980000002], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning; Conservation and Restoration Planning</h1>Working with state and Federal leaders in Minnesota to: (i) more strategically target state investments in conservation easements and land acquisitions; (ii)  map, model, and prioritize investments in conservation and restoration in the Buffalo River watershed through a multi-agency partnership; and (iii) co-develop a new suite of urban ecosystem services models with partners in Minneapolis and St. Paul, including urban designers, planners, agencies, and NGOs.");
L.marker([37.2988698, -121.82992790000003 ], {icon: blackIcon}).addTo(map).bindPopup("<h1>Spatial Planning</h1>Supporting the SC3 tri-county partnership with integrating ecosystem services into the Master Plan of the Coyote Watershed.");
L.marker([9.3372948, -73.65362089999996], {icon: blackIcon}).addTo(map).bindPopup("<h1>Development Impacts and Permitting</h1>Working with The Nature Conservancy to assess the impacts of coal mine expansion on drinking water quality regulation services and evaluate the potential to mitigate impacts to local communities through conservation and restoration.");
L.marker([-1.429167, 29.548332999999957], {icon: blackIcon}).addTo(map).bindPopup("<h1>Development Impacts and Permitting</h1>Using ecosystem service maps as baseline data for Strategic Environmental Assessment for proposed oil exploration within the Virunga World Heritage Site.");
L.marker([-8.3928622, -74.5826166], {icon: blackIcon}).addTo(map).bindPopup("<h1>Development Impacts and Permitting</h1>In collaboration with The Nature Conservancy, assessing the potential for the Pucallpa-Cruzeiro do Sul road to be developed with no net loss of natural capital and for mitigation measures to secure ecosystem services for local communities in a socially equitable way.");
L.marker([38.9071923, -77.03687070000001], {icon: blackIcon}).addTo(map).bindPopup("<h1>Development Impacts and Permitting in Washington, D.C.</h1>Working with the Inter-American Development bank to develop guidance and approaches for incorporating natural capital information into road planning and investments in Latin America and the Caribbean.");
L.marker([4.710988599999999, -74.072092], {icon: blackIcon}).addTo(map).bindPopup("<h1>Development Impacts and Permitting</h1>With partners from The Nature Conservancy, we created a customized decision support software tool (MAFE-T) to account for ecosystem services and terrestrial biodiversity when assessing development impacts and designing offsets, supporting fulfillment of Colombia’s national compensatory mitigation policy.");
L.marker([30.4434341, -87.9922684], {icon: blackIcon}).addTo(map).bindPopup("<h1>Conservation and Restoration Planning in Mobile Bay, Alabama</h1>Working with The Nature Conservancy on the design and placement of restored Oyster Reefs in Mobile Bay.");
L.marker([27.6648274, -81.51575350000002], {icon: blackIcon}).addTo(map).bindPopup("<h1>Conservation and Restoration Planning</h1>Working with The Nature Conservancy to prioritize conservation and restoration activities in Escambia and Pensacola Counties to achieve multiple watershed and coastal objectives, including reduction in erosion and flooding, nitrogen and phosphorous retention, nature-based recreation, and near-shore fisheries.");
L.marker([1.373333, 32.290275000000065], {icon: blackIcon}).addTo(map).bindPopup("<h1>Conservation and Restoration Planning</h1>Partnering with the International Union for the Conservation of Nature (IUCN) and the World Resources Institute (WRI) to develop a tool to prioritize investments in forest landscape restoration. We are piloting the tool in Uganda and then applying it in multiple countries throughout Africa, Asia, and Latin America.");
L.marker([38.8799697, -77.1067698], {icon: blackIcon}).addTo(map).bindPopup("<h1>Conservation and Restoration Planning</h1>Working with The Nature Conservancy to understand and communicate (through coastalresilience.org) where coastal habitats provide protection from sea-level rise and storms in the Gulf of Mexico and along the US east coast.");
L.marker([39.327962, -120.18325329999999], {icon: blackIcon}).addTo(map).bindPopup("<h1>Conservation and Restoration Planning</h1>Supporting TNC to integrate ecosystem services in a stakeholder-driven process to improve water quantity and quality in the Truckee River Watershed using RIOS, and to incorporate the value of watershed conservation activities for reducing wildfire risk and its associated impacts on water.");

//////////////////////////////////////////
// STANDARDS FOR PRIVATE SECTOR //////////
//////////////////////////////////////////
L.marker([51.5073509, -0.12775829999998223], {icon: pinkIcon}).addTo(map).bindPopup("<h1>Corporate Supply Chains</h1>Working with Unilever Corporation in locations around the world to develop and test methods for assessing biodiversity and ecosystem service impacts of alternative sourcing decisions for biofeedstocks in specific commodities.");
L.marker([41.8780025, -93.09770200000003], {icon: pinkIcon}).addTo(map).bindPopup("<h1>Corporate Supply Chains</h1>The Coca-Cola Company and World Wildlife Fund, along with partners at TNC, Pioneer, and NatCap, are working in Iowa's Cedar River Valley to pilot and develop a novel approach to inform decisions for securing clean water. The approach will show where to site agricultural interventions that can dramatically reduce pollution into rivers and streams while maintaining production and helping to mitigate greenhouse gas emissions.");

//////////////////////////////////////////
// SECURE FRESHWATER /////////////////////
//////////////////////////////////////////
L.marker([27.514162, 90.43360099999995 ], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in Chamkhar Chhu River Basin, Bhutan</h1>Assessing ecosystem services provided by the Chamkhar river basin to downstream hydropower projects and other stakeholders to enable the development and implementation of Payments for Ecosystem Services.");
L.marker([39.904211, 116.40739499999995], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in Beijing, China</h1>Working with the Chinese Academy of Sciences to quantify the benefits, costs, and livelihood implications of the Sloping Land Conversion Program, a large-scale payment for ecosystem services (PES) scheme designed to protect Beijing’s water supply in the Miyun Reservoir.");
L.marker([32.684715, 109.02902199999994], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in Ankang City, China</h1>Working with X’ian Jiatong University and the Chinese National Academy of Sciences to provide analysis of Payment for Ecosystem Services (PES) programs across China, such as the Sloping Land Conversion Program (SLCP). This work is providing feedback to the Chinese government that will be used to calculate future subsidy payments to millions of rural families.");
L.marker([3.8008893, -76.6412712], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in Cauca Valley, Colombia</h1>In collaboration with Agua por la Vida water fund, targeting conservation and restoration to maximize ecosystem services under climate change conditions, monitoring and evaluating the real benefits of these programs, and calculating return on investment.");
L.marker([3.8008893, -76.6412712], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Co-developing guidelines for implementing monitoring programs to understand how investments in watershed conservation and restoration are improving ecosystem services and livelihoods in collaboration with water funds and research partners including Agua por la Vida (Cauca Valley, Colombia), Extrema (São Paulo, Brazil), Guandu (Rio de Janeiro, Brazil), Camboriú (Balneario Camboriú, Brazil), FONAG (Quito, Ecuador), Aquafondo (Lima, Peru) and INECO (Veracruz, Mexico).");
L.marker([-23.5505199, -46.63330939999997], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Co-developing guidelines for implementing monitoring programs to understand how investments in watershed conservation and restoration are improving ecosystem services and livelihoods in collaboration with water funds and research partners including Agua por la Vida (Cauca Valley, Colombia), Extrema (São Paulo, Brazil), Guandu (Rio de Janeiro, Brazil), Camboriú (Balneario Camboriú, Brazil), FONAG (Quito, Ecuador), Aquafondo (Lima, Peru) and INECO (Veracruz, Mexico).");
L.marker([-22.9068467, -43.17289649999998], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Co-developing guidelines for implementing monitoring programs to understand how investments in watershed conservation and restoration are improving ecosystem services and livelihoods in collaboration with water funds and research partners including Agua por la Vida (Cauca Valley, Colombia), Extrema (São Paulo, Brazil), Guandu (Rio de Janeiro, Brazil), Camboriú (Balneario Camboriú, Brazil), FONAG (Quito, Ecuador), Aquafondo (Lima, Peru) and INECO (Veracruz, Mexico).");
L.marker([-26.9931062, -48.63564789999998], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Co-developing guidelines for implementing monitoring programs to understand how investments in watershed conservation and restoration are improving ecosystem services and livelihoods in collaboration with water funds and research partners including Agua por la Vida (Cauca Valley, Colombia), Extrema (São Paulo, Brazil), Guandu (Rio de Janeiro, Brazil), Camboriú (Balneario Camboriú, Brazil), FONAG (Quito, Ecuador), Aquafondo (Lima, Peru) and INECO (Veracruz, Mexico).");
L.marker([-0.1806532, -78.46783820000002], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Co-developing guidelines for implementing monitoring programs to understand how investments in watershed conservation and restoration are improving ecosystem services and livelihoods in collaboration with water funds and research partners including Agua por la Vida (Cauca Valley, Colombia), Extrema (São Paulo, Brazil), Guandu (Rio de Janeiro, Brazil), Camboriú (Balneario Camboriú, Brazil), FONAG (Quito, Ecuador), Aquafondo (Lima, Peru) and INECO (Veracruz, Mexico).");
L.marker([-12.046374, -77.0427934], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Co-developing guidelines for implementing monitoring programs to understand how investments in watershed conservation and restoration are improving ecosystem services and livelihoods in collaboration with water funds and research partners including Agua por la Vida (Cauca Valley, Colombia), Extrema (São Paulo, Brazil), Guandu (Rio de Janeiro, Brazil), Camboriú (Balneario Camboriú, Brazil), FONAG (Quito, Ecuador), Aquafondo (Lima, Peru) and INECO (Veracruz, Mexico).");
L.marker([19.173773, -96.13422409999998], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Co-developing guidelines for implementing monitoring programs to understand how investments in watershed conservation and restoration are improving ecosystem services and livelihoods in collaboration with water funds and research partners including Agua por la Vida (Cauca Valley, Colombia), Extrema (São Paulo, Brazil), Guandu (Rio de Janeiro, Brazil), Camboriú (Balneario Camboriú, Brazil), FONAG (Quito, Ecuador), Aquafondo (Lima, Peru) and INECO (Veracruz, Mexico).");
L.marker([4.570868, -74.29733299999998], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in Colombia</h1>In collaboration with the The Latin American Water Funds Partnership (an initiative of TNC, the FEMSA Foundation, the Inter-American Development Bank (IDB) and the Global Environment Facility (GEF)), developing a new tool (RIOS) for targeting investments in watershed conservation and restoration to improve services for the most people.");
L.marker([-1.5867894, 39.44241809999994], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in the Tana River watershed, Kenya</h1>Collaborating with TNC, FutureWater, and the Upper Tana-Nairobi Water Fund Steering Committee to develop a business case and return-on-investment analysis for investing in watershed services, securing clean water and hydropower for the city of Nairobi while improving local farmers' livelihoods.");
L.marker([-14.235004, -51.92527999999999], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in the Brazilian Amazon</h1>Assessment of ecosystem services provided by protected areas in the Brazilian Amazon to motivate and inform financing required for the implementation and management of the system of Amazon Region Protected Areas.");
L.marker([-6.369028, 34.888822000000005], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services in the Eastern Arc Mountains of Tanzania</h1>Mapping ecosystem services in the Eastern Arc Mountains in Tanzania to advocate for conservation of the area, and identify feasible areas for payment under REDD+, voluntary carbon projects and payments for watershed services.");
L.marker([31.1048145, 77.17340330000002], {icon: blueIcon}).addTo(map).bindPopup("<h1>Designing Payments for Ecosystem Services</h1>Working with the World Bank and the Himachal Pradesh Department of Forests to improve management of forest areas and demonstrate the value of those forests for sustaining the hydropower sector, to support development of a pilot payments for ecosystem services (PES) scheme.");
