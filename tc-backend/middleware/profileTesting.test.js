const ProfileMiddleware = require('./ProfileMiddleware')


test("Returns a false for a password that doesn't have at least 8 characters", () => {
    expect(ProfileMiddleware.validatePassword('abC12&')).toBe(false)
}) 

test("Returns a false for a password that doesn't have at least a symbol", () => {
    expect(ProfileMiddleware.validatePassword('abCdefg1234567')).toBe(false)
}) 

test("Returns a false for a password that doesn't have at least an upper and lower case letter", () => {
    expect(ProfileMiddleware.validatePassword('12345!@#$%')).toBe(false)
}) 

test("Returns a false for a password that doesn't have at least a number", () => {
    expect(ProfileMiddleware.validatePassword('abcdef!@#$%')).toBe(false)
}) 


