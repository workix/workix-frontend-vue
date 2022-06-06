<template>
    <div class="form-group" id="job-email-group">
        <label for="job-email">Email</label>
        <input type="email" class="form-control" id="job-email" placeholder="you@yourdomain.com">
    </div>
    <div class="form-group" id="job-title-group">
        <label for="job-title">Title</label>
        <input type="text" class="form-control" id="job-title" placeholder="e.g. Web Designer">
    </div>
    <div class="form-group" id="job-location-group">
        <label for="job-location">Location (Optional)</label>
        <input type="text" class="form-control" id="job-location" placeholder="e.g. New York">
    </div>
    <div class="form-group" id="job-region-group">
        <label for="job-region">Region</label>
        <select  class="form-control" id="job-region">
            <option>Choose a region</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Boston</option>
            <option>San Francisco</option>
        </select>
    </div>
    <div class="form-group" id="job-type-group">
        <label for="job-type">Job Type</label>
        <select  class="form-control" id="job-type">
            <option>Choose a job type</option>
            <option>Freelance</option>
            <option>Part Time</option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Volunteer</option>
        </select>
    </div>
    <div class="form-group" id="job-category-group">
        <label for="job-category">Job Category</label>
        <select  class="form-control" id="job-category">
            <option>Choose a job category</option>
            <option>Internet Services</option>
            <option>Banking</option>
            <option>Financial</option>
            <option>Marketing</option>
            <option>Management</option>
        </select>
    </div>
    <div class="form-group" id="job-description-group">
        <label for="job-description">Description</label>
        <div class="textarea form-control" id="job-description"></div>
    </div>
    <div class="form-group" id="job-url-group">
        <label for="job-url">Application Email/URL</label>
        <input type="text" class="form-control" id="job-url" placeholder="Email or Website URL">
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>