var mongoose = require('mongoose');


// define the schema for our unitGroup model
var enumGroupSchema = mongoose.Schema({
    _id: Number,
    groupName: String,
    groupDescription: String,
    enums: [{
        _id: Number,
        refid: String,
        ecode10: Number,
        cfEcode10: Number,
        partition: Number,
        token: String,
        description: String,
        comments: [{
            author: {
                _id: Number,
                name: String
            },
            text: String,
            date: Date
        }],
        systematicName: String,
        commonTerm: String,
        acronym: String,
        termDescription: String,
        user: {
            _id: mongoose.Schema.ObjectId,
            name: String,
            suffix: String
        },
        tags: [String],
        createdAt: Date,
        updatedAt: Date
    }],
    createdAt: Date,
    updatedAt: Date
},{ collection: 'enumGroups' });

// keep track of when unitGroups are updated and created
enumGroupSchema.pre('save', function(next, done) {
    if (this.isNew) {
        this.createdAt = Date.now();
    }
    this.updatedAt = Date.now();
    next();
});




// create the model for unitGroups and expose it to our app
module.exports = mongoose.model('EnumGroup', enumGroupSchema);
