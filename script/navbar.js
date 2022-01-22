function navbar() {
  return `
  <div class="header">
  <div class="header_first_row">
      <div class="header_first_row_first_section">
          <div class="logo" onclick="window.location.href = 'index.html'"><img class="logo_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TATA_1mg_Logo.svg/2560px-TATA_1mg_Logo.svg.png"></img></div>
          <div class="text_inside_first_header_row" onclick="window.location.href = 'index.html'">MEDICINES</div>
          <div class="text_inside_first_header_row">LAB TESTS</div>
          <div class="text_inside_first_header_row" onclick="window.location.href = 'AskDoctor.html'">ASK DOCTOR</div>
          <div class="text_inside_first_header_row" onclick="window.location.href = 'covid.html'">COVID19</div>
          <div class="text_inside_first_header_row" onclick="window.location.href = 'ayurved.html'">AYURVEDA</div>
          <div class="text_inside_first_header_row" onclick="window.location.href = 'careplan.html'">CARE PLAN</div>
      </div>
      <div class="header_first_row_second_section">
          <div class="login_signup"><span id="login_button" onclick="window.location.href = 'login.html'">Login</span> | <span id="signup_button" onclick="window.location.href = 'signup.html'" >Signup</span></div>
          <div id="signup_modal" class="modal">
              <!-- Modal content -->
                  <div class="modal-content">
                      <div class="modal_content_inner">
                          <div class="modal_first_section">
                              <img src="photos/Health-Related-Queries.png">
                              <div class="modal_first_section_first_text">Health Related Queries</div>
                              <div class="modal_first_section_second_text">Consult our certified doctors from anywhere, anytime and for free. We guarantee your privacy.</div>
                          </div>
                          <div class="modal_second_section">
                              <div class="login_close_btn" id="signup_close">&times;</div>
                              <div class="login_container">
                                <div class="login_heading_section">
                                  <div class="login_first_heading">Sign Up</div>
                                  <div class="login_second_heading">Please enter your Mobile number to receive One Time Password (OTP)</div>
                                </div>
                                <div class="input_container">
                                    <input type="number" class="login_input" id="signup_number_input" placeholder="Enter Mobile Number"/>
                                </div>
                                <div>
                                    <button class="login_button">Continue</button>
                                </div>
                                <div class="login_bottom_content">
                                    <div class="login_bottom_first_section">
                                        <span>
                                            <span class="login_bottom_first_section_first_text">Have an account?</span>
                                            <span class="login_bottom_first_section_second_text">Login</span>
                                        </span>
                                        <span>
                                            <span class="login_bottom_first_section_first_text">For corporate signup.</span>
                                            <span class="login_bottom_first_section_second_text">Click Here</span>
                                        </span>
                                    </div>
                                    <div class="login_bottom_second_section">
                                        <div class="login_bottom_second_section_first_row">
                                            By logging in, you agree to our 
                                        </div>

                                        <div class="login_bottom_second_section_first_row">
                                            <a>
                                                <span class="terms_and_conditions_text">Terms and conditions</span>
                                            </a>
                                            &
                                            <a>
                                                <span class="privacy_policy_text">Privacy policy</span>
                                            </a> 
                                        </div>
                                    </div>
                                    <div class="login_bottom_third_section">
                                        <span>Need Help? Get In Touch</span>
                                    </div>
                                </div>
                            </div>
                          </div>
                          
                      </div>
                    </div>
            
            </div> 

            <div id="login_modal" class="modal">

              <!-- Modal content -->
              <div class="modal-content">
                <div class="modal_content_inner">
                    <div class="modal_first_section">
                        Something
                    </div>
                    <div class="modal_second_section">
                        <div class="login_close_btn" id="login_close">&times;</div>
                        <div class="login_container">
                          <div class="login_heading_section">
                            <div class="login_first_heading">Login</div>
                            <div class="login_second_heading">Get access to your orders, lab tests & doctor consultants</div>
                          </div>
                          <div class="input_container">
                              <input type="number" class="login_input" placeholder="Enter Mobile Number" id="login_number_input"/>
                          </div>
                          <div>
                              <button class="login_button">LOGIN</button>
                          </div>
                          <div class="login_bottom_content">
                              <div class="login_bottom_first_section">
                                  <span>
                                      <span class="login_bottom_first_section_first_text">New on 1mg?</span>
                                      <span class="login_bottom_first_section_second_text">Sign Up</span>
                                  </span>
                                  <span>
                                      <span class="login_bottom_first_section_first_text">Have a corporate account?</span>
                                      <span class="login_bottom_first_section_second_text">Click Here</span>
                                  </span>
                              </div>
                              <div class="login_bottom_second_section">
                                  <div class="login_bottom_second_section_first_row">
                                      By logging in, you agree to our 
                                  </div>

                                  <div class="login_bottom_second_section_first_row">
                                      <a>
                                          <span class="terms_and_conditions_text">Terms and conditions</span>
                                      </a>
                                      &
                                      <a>
                                          <span class="privacy_policy_text">Privacy policy</span>
                                      </a> 
                                  </div>
                              </div>
                              <div class="login_bottom_third_section">
                                  <span>Need Help? Get In Touch</span>
                              </div>
                          </div>
                      </div>
                    </div>
                    
                </div>
              </div>
            
            </div> 
          <div class="offers" onclick="window.location.href = 'offers.html'">Offers</div>
          <div class="cart_icon" id="cart_icon" onclick="window.location.href = 'cart.html'"></div>
          <div class="help" onclick="window.location.href = 'NeedHelp.html'">Need Help?</div>
      </div>
  </div>
  <div class="header_second_row">
      <div class="header_second_row_first_section"> 
          <div class="city_list">
              <div class="navigation_icon"><i class="fas fa-map-marker-alt"></i></div>
              <input type="text" class="cities_input" placeholder="Enter your city"/>
              <div class="locator_icon"></div>
          </div>
          <div class="search_box">
              
              <input type="text" class="search_input" placeholder="Search for Medicines and Health Products" id="search_input" onkeypress="findme()"/>
              <span class="navigation_icon"><i class="fa fa-search"></i></span>
          </div>
      </div>
      <div class="header_second_row_second_section">
          <div class="discount_icon"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg" /></div>
          <div class="discount_tag">QUICK BUY! Flat 25% off on medicines*</div>
          <button class="upload">Upload</button>
          
          <div>
              
          </div>
      </div>
  </div>
  <div class="header_third_row">
      <div class="drop_down">All Medicines <i class="fa fa-angle-down" aria-hidden="true"></i>
          <div class="drop_down_content">
          <ul class="dropdown_first_heading" style="list-style-type:none">Medicine by theropatic class</ul>
          </div>
      </div>
      <div class="drop_down">Winter care <i class="fa fa-angle-down" aria-hidden="true"></i>
          <div class="drop_down_content">
          <ul class="dropdown_first_heading" style="list-style-type:none">Body & Skin Care</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Hair & Scalp Care</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Cough & Cold</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Fever & Headache</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Vaporizer & Nebulizer</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Heating Aid</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none" >Winter Combos</ul>
          </div>
      </div>
      <div class="drop_down">Featured <i class="fa fa-angle-down" aria-hidden="true"></i>
          <div class="drop_down_content">
          Tata 1mg Health Products
          <ul class="dropdown_first_heading" style="list-style-type:none">Trending Products</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Expoler Somethig New</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Buy More, Save More</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Vaccations</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Min 33% Off</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Combos</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Deal Of The Day</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Top Brands
              <li class="dropdown_second_heading">GOQii</li>
              <li class="dropdown_second_heading">Organic India</li>
              <li class="dropdown_second_heading">Accu-check</li>
              <li class="dropdown_second_heading">Dr. Morepen</li>
              <li class="dropdown_second_heading">Himalaya Products</li>
              <li class="dropdown_second_heading">Abbott Nutrition</li>
          </ul>
          </div>
      </div>
      <div class="drop_down">Covin Essentials <i class="fa fa-angle-down" aria-hidden="true"></i>
          <div class="drop_down_content">
          <ul class="dropdown_first_heading" style="list-style-type:none">Boost Your Imunity</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Chyawanprash</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Sanitizer & Hand Wash</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Mask</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Thermometer</ul>
          </div>
      </div>
      <div class="drop_down">Fitness & Supplements <i class="fa fa-angle-down" aria-hidden="true"></i>
          <div class="drop_down_content">
              <ul class="dropdown_first_heading" style="list-style-type:none">
                  Vitamins & Supplements
                  <li class="dropdown_second_heading" onclick="window.location.href = 'multivitamins.html'">Multivitamins</li>
                  <li class="dropdown_second_heading">Vitamins A-Z</li>
                  <li class="dropdown_second_heading">Mineral Supplements</li>
                  
              </ul>
              <ul class="dropdown_first_heading" style="list-style-type:none">
                   Nutritonal Drinks 
                  <li class="dropdown_second_heading">Adult Daily Nutrition</li>
                  <li class="dropdown_second_heading">Kid Nutrition</li>
                  <li class="dropdown_second_heading">For Women</li>
              </ul>
              <ul class="dropdown_first_heading" style="list-style-type:none">
                  Health food & Drinks
                  <li class="dropdown_second_heading">Green Tea & Herbal Tea</li>
              </ul>
              <ul class="dropdown_first_heading" style="list-style-type:none">
                  Protien Supplements
                  <li class="dropdown_second_heading">Whey Protien</li>
                  <li class="dropdown_second_heading">Amino Acid</li>
                  <li class="dropdown_second_heading">Mass Gainer</li>
                  <li class="dropdown_second_heading">Workout Essential</li>
                  <li class="dropdown_second_heading">Fat Burner</li>
              </ul>
              <ul class="dropdown_first_heading">
                   Omega & Fish oil
                  <li class="dropdown_second_heading">Fish Oil</li>
                  <li class="dropdown_second_heading">Cod Liver Oil</li>
                  <li class="dropdown_second_heading">Flax Seed Oil</li>
              </ul>
              <ul class="dropdown_first_heading">
                  Speciality Supplements
                  <li class="dropdown_second_heading">Green Supplements</li>
                  <li class="dropdown_second_heading">Beauty supplements</li>
                  <li class="dropdown_second_heading">Pre & Probiotics</li>
                  <li class="dropdown_second_heading">Glucosamina</li>
                  <li class="dropdown_second_heading">Collagen</li>
                  <li class="dropdown_second_heading">Antioxidents</li>
                  <li class="dropdown_second_heading">Biotin</li>
              </ul>
              <ul class="dropdown_first_heading">
                  Weigth Management
                  <li class="dropdown_second_heading">Weigth Management Herbs</li>
              </ul>
          </div>
      </div>
      <div class="drop_down">Diabetes <i class="fa fa-angle-down" aria-hidden="true"></i>
          <div class="drop_down_content">
          <ul class="dropdown_first_heading" style="list-style-type:none">Device 
              <li class="dropdown_second_heading">Blood Glucose Moniter</li>
              <li class="dropdown_second_heading">Test Strip & Lancets</li>
              <li class="dropdown_second_heading">Syrings & Pens</li>
          </ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Diabitic Medicines 
              <li class="dropdown_second_heading">Vitamins,Minerals & Antioxidents</li>
              <li class="dropdown_second_heading">Homeopathy Medicines</li>
              <li class="dropdown_second_heading">Ayurvedic Medicines</li>
          </ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Sugar Subsitutes</ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Diabetic Diet 
              <li class="dropdown_second_heading">Juices & vinegars</li>
              <li class="dropdown_second_heading">SuperFoods</li>
          </ul>
          <ul class="dropdown_first_heading" style="list-style-type:none">Diabetic Foot Health</ul>
          </div>
      </div>
      <div class="drop_down">Healthcare Device <i class="fa fa-angle-down" aria-hidden="true"></i>
        <div class="drop_down_content">
          <ul class="dropdown_first_heading">Masks(N95, Surgical & More</ul>
          <ul class="dropdown_first_heading">BP Monitors</ul>
          <ul class="dropdown_first_heading"> Nebulizers & Vaporizers</ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
        </div>
      </div>
      <div class="drop_down">Personal Care <i class="fa fa-angle-down" aria-hidden="true"></i></div>
      <div class="drop_down">Health Condition <i class="fa fa-angle-down" aria-hidden="true"></i></div>
      <div class="drop_down">Ayurveda Products <i class="fa fa-angle-down" aria-hidden="true"></i></div>
      <div class="drop_down">Homeopathy <i class="fa fa-angle-down" aria-hidden="true"></i></div>
      

  </div>
</div>`;
}
export default navbar;
