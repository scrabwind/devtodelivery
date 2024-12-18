'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">devtodelivery-swapi documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FilmsModule.html" data-type="entity-link" >FilmsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilmsModule-66d01fe25fc796021215587e764123303bd2fa916fba5d42a1b0f6e447e97d7f9c5c1f0952cfba343b555148695624e4e60a4804123969c6770c0bae8d9a887a"' : 'data-bs-target="#xs-injectables-links-module-FilmsModule-66d01fe25fc796021215587e764123303bd2fa916fba5d42a1b0f6e447e97d7f9c5c1f0952cfba343b555148695624e4e60a4804123969c6770c0bae8d9a887a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilmsModule-66d01fe25fc796021215587e764123303bd2fa916fba5d42a1b0f6e447e97d7f9c5c1f0952cfba343b555148695624e4e60a4804123969c6770c0bae8d9a887a"' :
                                        'id="xs-injectables-links-module-FilmsModule-66d01fe25fc796021215587e764123303bd2fa916fba5d42a1b0f6e447e97d7f9c5c1f0952cfba343b555148695624e4e60a4804123969c6770c0bae8d9a887a"' }>
                                        <li class="link">
                                            <a href="injectables/FilmsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilmsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PeopleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeopleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PeopleModule.html" data-type="entity-link" >PeopleModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PeopleModule-63c8f096d7a8744160844666616775240fc937ee1ea186d12d15df0f3f04871e3ef31c5c491b7239bd8d7a9a748d94ac0dea5c76856e22520cd10b3de3690ec2"' : 'data-bs-target="#xs-injectables-links-module-PeopleModule-63c8f096d7a8744160844666616775240fc937ee1ea186d12d15df0f3f04871e3ef31c5c491b7239bd8d7a9a748d94ac0dea5c76856e22520cd10b3de3690ec2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PeopleModule-63c8f096d7a8744160844666616775240fc937ee1ea186d12d15df0f3f04871e3ef31c5c491b7239bd8d7a9a748d94ac0dea5c76856e22520cd10b3de3690ec2"' :
                                        'id="xs-injectables-links-module-PeopleModule-63c8f096d7a8744160844666616775240fc937ee1ea186d12d15df0f3f04871e3ef31c5c491b7239bd8d7a9a748d94ac0dea5c76856e22520cd10b3de3690ec2"' }>
                                        <li class="link">
                                            <a href="injectables/PeopleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeopleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlanetsModule.html" data-type="entity-link" >PlanetsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PlanetsModule-c06277ce929b7d80e318d71625e49649b122536b8fdb09df64682c1309efa4889139209a8f36179fd655fdd9e794ea81f0bd01867d44a4183330a8c4d98f01c9"' : 'data-bs-target="#xs-injectables-links-module-PlanetsModule-c06277ce929b7d80e318d71625e49649b122536b8fdb09df64682c1309efa4889139209a8f36179fd655fdd9e794ea81f0bd01867d44a4183330a8c4d98f01c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlanetsModule-c06277ce929b7d80e318d71625e49649b122536b8fdb09df64682c1309efa4889139209a8f36179fd655fdd9e794ea81f0bd01867d44a4183330a8c4d98f01c9"' :
                                        'id="xs-injectables-links-module-PlanetsModule-c06277ce929b7d80e318d71625e49649b122536b8fdb09df64682c1309efa4889139209a8f36179fd655fdd9e794ea81f0bd01867d44a4183330a8c4d98f01c9"' }>
                                        <li class="link">
                                            <a href="injectables/PlanetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlanetsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpeciesModule.html" data-type="entity-link" >SpeciesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SpeciesModule-11c0ad8d962ef617a51e76e8cb967fd9b29d51ee0bacb6628ce6330f2d888de3742c2a71b08a98f4e4852961410f8c8e0c08959211b7baa2b85cd5ff04c28a4f"' : 'data-bs-target="#xs-injectables-links-module-SpeciesModule-11c0ad8d962ef617a51e76e8cb967fd9b29d51ee0bacb6628ce6330f2d888de3742c2a71b08a98f4e4852961410f8c8e0c08959211b7baa2b85cd5ff04c28a4f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpeciesModule-11c0ad8d962ef617a51e76e8cb967fd9b29d51ee0bacb6628ce6330f2d888de3742c2a71b08a98f4e4852961410f8c8e0c08959211b7baa2b85cd5ff04c28a4f"' :
                                        'id="xs-injectables-links-module-SpeciesModule-11c0ad8d962ef617a51e76e8cb967fd9b29d51ee0bacb6628ce6330f2d888de3742c2a71b08a98f4e4852961410f8c8e0c08959211b7baa2b85cd5ff04c28a4f"' }>
                                        <li class="link">
                                            <a href="injectables/SpeciesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpeciesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StarshipsModule.html" data-type="entity-link" >StarshipsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StarshipsModule-7676c6297c06d3ce73e2e063a925dbf9fda36d74d043416db3030492282775a24938e84de1baacc8c750c4eaa802289faa199e6d14ae357069742467bbc5e7fd"' : 'data-bs-target="#xs-injectables-links-module-StarshipsModule-7676c6297c06d3ce73e2e063a925dbf9fda36d74d043416db3030492282775a24938e84de1baacc8c750c4eaa802289faa199e6d14ae357069742467bbc5e7fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StarshipsModule-7676c6297c06d3ce73e2e063a925dbf9fda36d74d043416db3030492282775a24938e84de1baacc8c750c4eaa802289faa199e6d14ae357069742467bbc5e7fd"' :
                                        'id="xs-injectables-links-module-StarshipsModule-7676c6297c06d3ce73e2e063a925dbf9fda36d74d043416db3030492282775a24938e84de1baacc8c750c4eaa802289faa199e6d14ae357069742467bbc5e7fd"' }>
                                        <li class="link">
                                            <a href="injectables/StarshipsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StarshipsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VehiclesModule.html" data-type="entity-link" >VehiclesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VehiclesModule-79d1b66fda9caca3b31c1a0c88782a438b65e73c866b1f73060b17979c170d8c8ce20652a7a04c5fb437be3eff59f7f97c38fcd4bd19caeeb7218f2f29cc692a"' : 'data-bs-target="#xs-injectables-links-module-VehiclesModule-79d1b66fda9caca3b31c1a0c88782a438b65e73c866b1f73060b17979c170d8c8ce20652a7a04c5fb437be3eff59f7f97c38fcd4bd19caeeb7218f2f29cc692a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VehiclesModule-79d1b66fda9caca3b31c1a0c88782a438b65e73c866b1f73060b17979c170d8c8ce20652a7a04c5fb437be3eff59f7f97c38fcd4bd19caeeb7218f2f29cc692a"' :
                                        'id="xs-injectables-links-module-VehiclesModule-79d1b66fda9caca3b31c1a0c88782a438b65e73c866b1f73060b17979c170d8c8ce20652a7a04c5fb437be3eff59f7f97c38fcd4bd19caeeb7218f2f29cc692a"' }>
                                        <li class="link">
                                            <a href="injectables/VehiclesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehiclesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FilmsResolver.html" data-type="entity-link" >FilmsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlanetsResolver.html" data-type="entity-link" >PlanetsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpeciesResolver.html" data-type="entity-link" >SpeciesResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/StarshipsResolver.html" data-type="entity-link" >StarshipsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/VehiclesResolver.html" data-type="entity-link" >VehiclesResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FilmsService.html" data-type="entity-link" >FilmsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PeopleService.html" data-type="entity-link" >PeopleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlanetsService.html" data-type="entity-link" >PlanetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpeciesService.html" data-type="entity-link" >SpeciesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StarshipsService.html" data-type="entity-link" >StarshipsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VehiclesService.html" data-type="entity-link" >VehiclesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Film.html" data-type="entity-link" >Film</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IQuery.html" data-type="entity-link" >IQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Planets.html" data-type="entity-link" >Planets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Species.html" data-type="entity-link" >Species</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Starships.html" data-type="entity-link" >Starships</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vehicles.html" data-type="entity-link" >Vehicles</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});