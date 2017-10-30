/*******************************************************************************
 * Copyright  (c) 2016-2017, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 *
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
package com.wso2telco.dep.manageservice.resource.service.whitelist;

import com.wso2telco.dep.manageservice.resource.service.Serviceable;

public class WhiteListFactory {

    static WhiteListFactory instance;
    WhiteListFactory () {
    }

    public static synchronized WhiteListFactory getInstance() {
        if (instance == null) {
            instance = new WhiteListFactory();
        }
        return instance;
    }

    public Serviceable getSubscriberService() {
        return new SubscriberService();
    }

    public Serviceable getApplicationService() {
        return new ApplicationService();
    }

}
