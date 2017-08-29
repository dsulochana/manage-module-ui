'use strict';
const rateService = require('./rate_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/rate/addratecategory/{id}',
        handler: rateService.addRateCategory
    },
    {
        method: 'POST',
        path: '/api/rate/categories',
        handler: rateService.addCategory
    },
    {
        method: 'POST',
        path: '/api/rate/tariffs',
        handler: rateService.addTariff
    },
    {
        method: 'POST',
        path: '/api/rate/currencies',
        handler: rateService.addCurrency
    },
    {
        method: 'POST',
        path: '/api/rate/addratecard',
        handler: rateService.addRateCard
    },
    {
        method: 'GET',
        path: '/api/rate/gettarifflist',
        handler: rateService.getTariffList
    },
    {
        method: 'GET',
        path: '/api/rate/currencies',
        handler: rateService.getCurrencyList
    },
    {
        method: 'GET',
        path: '/api/rate/getratetypelist',
        handler: rateService.getRateTypeList
    },
    {
        method: 'GET',
        path: '/api/rate/categories',
        handler: rateService.getCategoryList
    },
    {
        method: 'GET',
        path: '/api/rate/getratedefinitionList',
        handler: rateService.getRateDefinitionList
    },
    {
        method: 'GET',
        path: '/api/rate/getTaxList',
        handler: rateService.getTaxList
    }

];