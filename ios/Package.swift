// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Nectary",
    platforms: [
        .iOS(.v16),
        .macOS(.v13),
    ],
    products: [
        .library(
            name: "Nectary",
            targets: ["Nectary"]
        ),
    ],
    targets: [
        .target(
            name: "Nectary",
            path: "Sources/Nectary"
        ),
        .testTarget(
            name: "NectaryTests",
            dependencies: ["Nectary"],
            path: "Tests/NectaryTests"
        ),
    ]
)
