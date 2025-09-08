cd ../html && npm run build && cd ../build && cmake .. && make -j$(nproc)
launchctl kill SIGTERM gui/$(id -u)/com.user.ttyd
